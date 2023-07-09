/**
 *
 * Tags
 *
 */

// Self Invoking Anonymous Function
(function(){

    var settings = {
        //endpoint : $('#tags-main-wrap').attr("data-endpoint"),
        endpoint: $("body").data("api_endpoint")
    },
    locale = typeof language !== 'undefined' ? language : 'en';

    // Initialise
    init();

    /**
     * Initialises Tags JavaScript
     */
    function init(){

        // Display all tags on load
        listAllTags();

        // Engage sticky ad movement
        innerPageStickyAd('.inner-page-sticky-ad', 130);
    }

    /**
     * Lists all tags
     * @param order
     * @returns {undefined}
     */
    function listAllTags(order){

        // IE friendly default value
        var order = order || 'name-asc';

        // Fade in loader
        $('.loading').fadeIn();

        // Use Ajax to get Tags List
        $.ajax({
            url: settings.endpoint+'/course/tag/list?size=9999&page=1&with-categories=3&with-details=false&order='+order+'&locale='+locale,
            type: 'GET',
            headers: {
                'X-HEADER-HOST':'hXWg8KI5dIP+105XymTPG6TAPUA=',
                'Content-Type':'application/json'
            },
            success: function (data) {
                if (typeof data.status !== 'undefined' && data.status === 200) {

                    // Declare required variables
                    var output = '',
                        tagName = '',
                        count = 0;

                    // Loop through results
                    for (var i = 0; i < data.result.length; i++) {

                        // If name is too long, trim it and add '...' at the end
                        tagName = trimString(data.result[i].name, 30);

                        // We can't rely on data.result.length since there might be tags with no categories which we have to skip, so instead we increment counter
                        count++;

                        // Generate single Tag output
                        if(data.result[i].hasOwnProperty("tagCategories") && data.result[i].tagCategories[0] !== undefined){
                            output +=
                                '<a href="'+tag_route +'/'+ data.result[i].slug+'" data-slug="' + data.result[i].slug + '">' +
                                    '<div class="tag-wrap">' +
                                        '<div class="tag-text">' + tagName + '</div>' +
                                        '<div class="tag-categories-wrap">' +
                                            displayCategoriesCount(data.result[i].tagCategories) +
                                        '</div>' +
                                    '</div>' +
                                '</a>'
                            ;
                        }else{
                            output +=
                                '<a href="'+tag_route +'/'+ data.result[i].slug+'" data-slug="' + data.result[i].slug + '">' +
                                    '<div class="tag-wrap">' +
                                        '<div class="tag-text">' + tagName + '</div>' +
                                        '<div class="tag-categories-wrap"></div>' +
                                    '</div>' +
                                '</a>'
                            ;
                        }
                    }

                    // Update count on the view
                    $('#tags-num').text('');
                    $('#tags-num').text(count);

                    // Insert Tag list into appropriate node
                    $('.tags-list').html('');
                    $('.tags-list').html(output);

                    // Should we need it, here's columnizer call
                    // $(function(){
                    //     $('.tags-list').columnize({width:360});
                    // });

                    // Fade out loader
                    $('.loading').fadeOut();
                }
            },
            error: function (data, err){
                $('.loading').fadeOut();
                console.log('ERROR: Error loading Tags listing');
;            }
        });

        return undefined;
    }

    /**
     * Fetch and display categories count
     * @param categories
     * @returns {string}
     */
    function displayCategoriesCount(categories){
        var slugs = [];

        // Extract root_slugs from Tag's categories
        for (var i = 0; i < categories.length; i++) {
            slugs[i] = categories[i].root_slug;
        }

        // Remove duplicates
        slugs = removeDuplicates(slugs);

        var output = '';

        // Generate output for Tag Category Box
        for (var i = 0; i < slugs.length; i++) {

            if(slugs[i] === 'it'){
                output += '<div class="tag-category-box"><span data-toggle="popover" data-placement="bottom" data-html="true" data-content="<span class=\'upperCase\'>' + slugs[i] + '</span>" class="tag-icon icon-category-' + slugs[i] + '"></span></div>';
            }else{
                output += '<div class="tag-category-box"><span data-toggle="popover" data-placement="bottom" data-html="true" data-content="<span class=\'capitalize\'>' + slugs[i] + '</span>" class="tag-icon icon-category-' + slugs[i] + '"></span></div>';
            }
        }
        return output;
    }

    /**
     * Generate Modal for a Single Tag call
     * @param slug of a tag
     * @returns {undefined}
     */
    function singleTagPopup(slug){

        // Fade in loader
        $('.loading').fadeIn();

        // Make AJAX request
        $.ajax({
            url: settings.endpoint+'/course/tag/list?size=1000&page=1&with-categories=3&with-details=true&locale='+locale,
            type: 'GET',
            headers: {
                'X-HEADER-HOST':'hXWg8KI5dIP+105XymTPG6TAPUA=',
                'Content-Type':'application/json'
            },
            success: function (data) {
                if (typeof data.status !== 'undefined' && data.status === 200) {

                    var tagName = '';

                    // Empty containers
                    $('#tag-name, #description').text('');

                    // We have to loop through results to find the one we are looking for
                    for (var i = 0; i<data.result.length; i++){

                        // If we found it
                        if(data.result[i].slug === slug){

                            // Insert details: name, description, url for the button
                            $('#tag-name').text(data.result[i].name);
                            $('#description').html(data.result[i].description);
                            $('.tag-button').attr("href", tag_route + '/' + slug);

                            // Pull the name of tag outside the loop
                            tagName = data.result[i].name;

                            // Make Modal visible
                            if($('.tag-popup').length){
                                $('.tag-popup').css('display','block');
                                $('.tag-popup').removeClass('hidden');
                            }

                        }
                    }

                    // Get Tag categories with counters
                    getSingleTagCategoryCount(slug);

                    // Get similar Tags through filter
                    getFilteredTags(tagName, data.result);

                    // Fade out loader
                    $('.loading').fadeOut();
                }
            },
            error: function (data){
                $('.loading').fadeOut();
                console.log('ERROR: Error loading single Tag data');
            }
        });

        return undefined;
    }

    /**
     * Gets courses count and categories for a given Tag
     * @param slug
     * @returns {undefined}
     */
    function getSingleTagCategoryCount(slug){
        slug = encodeURIComponent(slug);

        // Make AJAX request, specify size as unlikely large integer
        $.ajax({
            url: settings.endpoint+'/search?page=1&locale='+locale+'&size=1000&tag='+slug,
            type: 'GET',
            headers: {
                'X-HEADER-HOST':'hXWg8KI5dIP+105XymTPG6TAPUA=',
                'Content-Type':'application/json'
            },
            success: function (data) {
                if (typeof data.status !== 'undefined' && data.status === 200) {


                    var rootCategories = [];

                    // Push root categories into an array
                    // for (var i = 0; i < data.result.length; i++) {
                    //     rootCategories.push(data.result[i].root_category_slug);
                    // }

                    // Display categories on top
                    displayTopCategories(rootCategories);

                    // Fade loader out
                    $('.loading').fadeOut();
                }
            },
            error: function (data){
                $('.loading').fadeOut();
                console.log('ERROR: Error loading courses associated with Tag');
            }
        });

        return undefined;

    }

    /**
     * Displays top categories: categories come from courses along with courses count, limited to 3 at most
     * @param items
     */
    function displayTopCategories(items){
        var counts = {};

        // Count courses
        for (var i = 0; i < items.length; i++) {
            var num = items[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }

        // Sort in descending order
        var sortable = [];
        for (var val in counts) {
            sortable.push([val, counts[val]]);
        }

        sortable.sort(function(a, b) {
            return b[1] - a[1];
        });

        // Trim array to be 3 at most
        sortable.length = sortable.length < 3 ? sortable.length : 3;

        var output = '';

        // Generate the output
        for (var i = 0; i < sortable.length; i++) {

            if(sortable[i][0] === 'it'){
                output += '<li><p><span class="category-icon icon-category-' + sortable[i][0] + '"></span> ' + sortable[i][1] + ' <span class="upper">' + sortable[i][0].replace("-", " ") + ' </span> Courses</p></li>';
            }else{
                output += '<li><p><span class="category-icon icon-category-' + sortable[i][0] + '"></span> ' + sortable[i][1] + ' <span class="capitalize">' + sortable[i][0].replace("-", " ") + ' </span> Courses</p></li>';
            }
        }

        // Fill the container with output
        $('#categories ul').html('');
        $('#categories ul').html(output);
    }

    /**
     * Get similar tags through the filter
     * @param filteredResults
     */
    function getRelatedTags(filteredResults){

        var output = '',
            tagName = '';

        // Generate output for similar tags
        for (var i = 0; i < filteredResults.length; i++) {

            tagName = trimString(filteredResults[i].name, 25);



            if(filteredResults[i].hasOwnProperty("tagCategories") && filteredResults[i].tagCategories[0] !== undefined){
                output +=
                    '<li>'+
                    '<a href="' + tag_route + '/' + filteredResults[i].slug + '">'+
                    '<div class="tag-wrap">'+
                    '<div class="tag-text">' + tagName + '</div>'+
                    '<div class="tag-categories-wrap">'+
                    '<div class="tag-category-box category-' + filteredResults[i].tagCategories[0].root_slug + '"><span data-toggle="popover" data-placement="bottom" data-html="true" data-content="<span>' + filteredResults[i].tagCategories[0].root_name + '</span>" class="tag-icon icon-category-' + filteredResults[i].tagCategories[0].root_slug + '"></span></div>'+
                    '</div>'+
                    '</div>'+
                    '</a>'+
                    '</li>';
            }else{
                output +=
                    '<li>'+
                    '<a href="' + tag_route + '/' + filteredResults[i].slug + '">'+
                    '<div class="tag-wrap">'+
                    '<div class="tag-text">' + tagName + '</div>'+
                    '<div class="tag-categories-wrap">'+
                    '</div>'+
                    '</div>'+
                    '</a>'+
                    '</li>';
            }
        }

        // Fill container with the output
        $('#related-tags ul').html('');
        $('#related-tags ul').html(output);

    }


    /***** HELPERS ******/

    /**
     * Removes duplicate values from an array
     * @param {array} source that might contain duplicates
     * @returns {array} without duplicates
     */
    function removeDuplicates(source){

        var uniq = source.reduce(function(a,b){
            if (a.indexOf(b) < 0 ) a.push(b);
            return a;
        },[]);

        return uniq;
    }

    /**
     * Applies filter to get filtered array
     * @param {string} tagName
     * @param {array} dataset
     */
    function getFilteredTags(tagName, dataset){

        // Remove any special characters like ampersands and replace with empty space
        tagName = tagName.replace(/\W+/g, ' ');

        // Explode query to single words
        var query = tagName.split(" ");

        // Apply filter
        var filteredResult = dataset.filter(function (element) {

            // Depending on length of query, up to 5 words (unlikely to be more than that)
            return element.name.indexOf(query[0]) !== -1 || element.name.indexOf(query[1]) !== -1 || element.name.indexOf(query[2]) !== -1 || element.name.indexOf(query[3]) !== -1 || element.name.indexOf(query[4]) !== -1 || element.name.indexOf(query[5]) !== -1;

        });

        // Display results using getRelatedTags() function
        getRelatedTags(filteredResult);

    }

    /**
     * Trim string to required length
     * @param string
     * @param length
     * @returns {string}
     */
    function trimString(string, length){
        return string.length > length ? string.substring(0, length-3) + '...' : string;
    }

    /**
     * Filters tags in relation to search query
     */
    function applyFilter(){
        // Declare variables
        var input = $('#tag-search-form input[type="text"]'), 
            filter = input.val().toUpperCase(), 
            tagName = $('.tag-text'), 
            count = 0;
    
        if(input.val().length > 0) {
            tagName.each((i,v) => {
                if($(v).text().toUpperCase().indexOf(filter) > -1){
                    $(v).parent().parent().css('display', 'inline-block');
    
                    // Increment counter
                    count++;
                }else{
                    // And hide those Tags that don't match
                    $(v).parent().parent().css('display', 'none');
                }
    
                // Add count to the view
                $('#tags-num').text(count);
    
                // Remove sort
                $('select[name="sorting"]').hide();
                $('.sort').addClass('hidden');
            });
        }
        else {
            tagName.each((i,v) => {
                count++;
                $(v).parent().parent().css('display', 'inline-block');
    
                $('#tags-num').text(count);
    
                // Re-add sort
                $('select[name="sorting"]').show();
                $('.sort').removeClass('hidden');
            });
        }

        // If no results shown display 'No results message'
        if(count === 0){
            $('#no-results').fadeIn();
        }else{
            $('#no-results').hide();
        }
    }

    /***** EVENTS ******/


    /**
     * React to user clicking on a single tag
     */
    $('body').on('click', '.tags-list a', function (e){
        if(window.innerWidth >= 1024 && window.innerHeight >= 600){
            e.preventDefault();
            // If we are on wider screens, click results in Modal triggering and scrollbar (forced) initialisation
            singleTagPopup($(this).attr('data-slug'));
            scrollbar();

        }
    });

    /**
     * React to user clicking on Modal close button
     */
    $('.tag-popup .icon-cross').click(function (e) {
        e.preventDefault();

        $('.tag-popup').fadeOut();
        $('#categories ul').html('');
    });

    /**
     * React to user clicking outside the Modal
     */
    $(document).click(function(e) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(e.target).closest(".tag-popup-content").length) {
            $('.tag-popup').addClass('hidden');
            $('#categories ul').html('');
        }
    });

    /**
     * React to user clicking on search button
     */
    $(document).on('click', '#search-tags', applyFilter);

    /**
     * React to user changing sort order
     */
    $('select[name=sorting]').change(function(){

        // When order is changed
        var order = $(this).val();

        // Regenerate results
        listAllTags(order);
    });

    /**
     * React to user pressing 'Enter' key when Tag search field has focus state
     */
    $(window).keydown(function(e){

        // If search field has focus state and key is 'Enter'
        if($('input[name="tag-search"]').is(":focus") && e.keyCode === 13){

            applyFilter();
        }
    });

    /**
     * Enable Boostrap popovers when AJAX execution stops
     */
    $(document).ajaxStop(function(){
        $('[data-toggle="popover"]').popover({
            trigger: 'hover',
        });
    });

    function scrollbar(){
        var timer  = 0;

        if(typeof mCustomScrollbar === 'undefined'){
            timer = 500;
        }

        setTimeout(function(){
            $(".scrollbar").mCustomScrollbar({
                theme: '3d',
                scrollbarPosition: 'inside',
                scrollInertia: 300,
                autoHideScrollbar: false,
                documentTouchScroll: true,
                scrollButtons:{ enable: ($('.cart-scrollbar').length > 0) }
            });
        }, timer);
    }
})();
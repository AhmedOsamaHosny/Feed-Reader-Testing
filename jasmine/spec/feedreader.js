/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it('has URL defined and URL not empty', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).toBeTruthy();
      }
    });


    /* Test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('has a name defined and not empty', function functionName() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).toBeTruthy();
      }

    });
  });


  /* Test suite named "The menu" */
  describe('The menu', function functionName() {
    /* Test that ensures the menu element is
     * hidden by default.
     */
    it('the menu element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* Test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     *  have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */

    it('the menu changes visibility when the menu icon is clicked.', function() {
      var element = $('body');
      var menuIcon = $('.menu-icon-link');
      // click first time menuIcon
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      // click second time menuIcon
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);

    });
  });


  /* Test suite named "Initial Entries" */
  describe('Initial Entries', function functionName() {

    /* Test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function done() {
      loadFeed(0, function() {
        done();
      });
    });

    it('there is at leasta single .entry element within the .feed container.', function(done) {
      expect($('.feed .entry').length).toBeGreaterThan(0);
      done();
    });
  });


  /* Test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {

    /* Test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    var init;
    beforeEach(function done() {
      loadFeed(0, function() {
        init = document.querySelector('.feed').innerHTML;
        loadFeed(1, function() {
          done();
        });
      });

      it('when a new feed is loaded by the loadFeed function that the content actually changes.', function() {
        var current = document.querySelector('.feed').innerHTML;
        expect(current).not.toBe(init);
      });
    });

  });

});

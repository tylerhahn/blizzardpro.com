const cssClasses = {
  collectionSidebar: ".collection-sidebar",
  accordionHeading: ".accordion-heading",
  accordionContent: ".accordion-content",
  filterItem: ".collection-sidebar__filter-item",
  filter: ".collection-sidebar__filter-items",
};

// Accordion
const accordionHeading = $(cssClasses.accordionHeading);

var endlessScroll = new Ajaxinate({
  container: "#AjaxinateLoop",
  pagination: "#AjaxinatePagination",
  method: "click",
  offset: 150,
  beforeLoad: function () {
    $(".collection__main").addClass("ajax-loading");
  },
  callback: function () {
    $(".collection__main").removeClass("ajax-loading");
  },
});

accordionHeading.on("click", function () {
  const parentItem = $(this).parent();
  const content = parentItem.find(cssClasses.accordionContent).first();

  $(this).toggleClass("open");
  content.slideToggle();
});

// Tag filter
const url = window.location.origin + window.location.pathname;
const filterItem = $(cssClasses.filterItem);
let collectionUrl = $(cssClasses.collectionSidebar).data("collection-url");

var productsContainer = $(".collection-grid__products");

filterItem.each(function () {
  const tag = $(this).data("tag");

  if (url.indexOf(tag) !== -1) {
    $(this).addClass("active");

    console.log($(this), "add class active");

    const accordionHeading = $(this)
      .parent()
      .parent()
      .find(cssClasses.accordionHeading);

    if (accordionHeading.length !== 0) {
      accordionHeading.trigger("click");
    }
  }
});

filterItem.on("click", function () {
  let search = window.location.search;

  if (search.indexOf("page") !== -1) {
    const pageParam = search.split("&")[0];
    search = search.replace(pageParam, "").replace("&", "?");
  }

  const filter = $(this).parents("[data-filter]");
  const filterItems = filter.find(cssClasses.filterItem);
  /* var addActiveClass = true;

    if ($(this).hasClass('active')) {
        addActiveClass = false
    }

    filterItems.removeClass('active');

    if (addActiveClass) {
        $(this).addClass('active');
    }*/

  $(this).toggleClass("active");

  var activeItems = $(".collection-sidebar").find(
    cssClasses.filterItem + ".active"
  );
  var activeTags = [];

  activeItems.each(function (index, el) {
    var tag = $(el).attr("data-tag");

    if (tag) {
      activeTags.push(tag);
    }
  });

  var tagsUrl = activeTags.join("+");

  var newUrl = collectionUrl;

  if (tagsUrl) {
    newUrl += "/" + tagsUrl;
  }

  newUrl += search;

  $(".collection__main").addClass("ajax-loading");

  console.log(newUrl);
  console.log("---");

  $.get({
    url: newUrl,
    success: function (data) {
      var newProductsWrapper = $(data).find(".collection-grid__products");
      var newProductsHtml = newProductsWrapper.html();
      productsContainer.html(newProductsHtml);

      var newItemCount = newProductsWrapper.attr("data-products-count");
      $(".js-product-grid__count").text(newItemCount);

      var newPaginationHtml = $(data).find("#AjaxinatePagination").html();
      $("#AjaxinatePagination").html(newPaginationHtml);
      var pagination = $("#AjaxinatePagination");

      if (pagination.length) {
        pagination.html(newPaginationHtml);

        new Ajaxinate({
          container: "#AjaxinateLoop",
          pagination: "#AjaxinatePagination",
          method: "click",
          offset: 150,
          beforeLoad: function () {
            $(".collection__main").addClass("ajax-loading");
          },
          callback: function () {
            $(".collection__main").removeClass("ajax-loading");
          },
        });
      }

      history.pushState(
        {
          page: newUrl,
        },
        null,
        newUrl
      );

      $(".collection__main").removeClass("ajax-loading");
    },
  });
});

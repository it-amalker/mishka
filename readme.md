# Mishka template specification

## 1. Common technical requirements
* Grid: defined in layout;
* Adaptive markup: mobile, tablet and desktop versions (fixed or responsive);
* Adaptive graphics: retina and vector images;
* Methodology: BEM;
* Preprocessors: Less/Sass;
* Automatization tool: Grunt or Gulp;
* Framework use: none;
* Cross browsing: IE11+, Edge, Chrome, Firefox, Opera, Safari;
* Typography: partially defined in layout (other - at the developer discretion);
* Font used: Open Sans.

## 2. Explanation for the students
* All three pages (main, form and catalog) are mandatory to markup; 
* Layout has hidden layers with popups. Such layers in photoshop highlighted by red color; 
* Layout must be marked up gradually: start with a mobile version, then - tablet and end with desktop version; 
* Raster and vector (also retina and adaptive) graphics will be added to project after the relevant webinar.

## 3. Mandatory requirements

### All layouts:
* Between versions (mobile, tablet, desktop) grid might be responsive or fixed;
* In fixed grid content block centered and can't be less than layout width;
* Inner page logo is a link to the main page;
* Graphics with waved lines must be limited by content width;
* Main menu in mobile version appears above site header (in photoshop highlighted by red color);
* Mobile menu can be implemented in two ways:
  * implementation with JS;
  * implementation without JS.
* Implementation without JS: the main menu is always opened and a cross icon is hidden;
* With JS implementation:  main menu block must open by clicking on «hamburger» button. When menu is opened, «hamburger» button replaced by cross icon. Click event on it must close the main menu;
* All element styles (hover, active, etc.) are described in styleguide;
* Academy logo in footer leads on [«Professional HTML & CSS, level 2»​](https://htmlacademy.ru/intensive/adaptive)  landing page of intensive.

### mishka-index.html:

#### mobile version
* Logo consists of only store title «Mishka»;
* Whole blocks with section names («Interior item», «Kids toys») are links, which leads to catalog section page (no need to implement catalog section pages);
* «Item of the week» order button must open modal window;
* Block «Reviews»: reviews slider implementation is not mandatory. Enough implementation is markup one review and arrow buttons;  
* Reviews button must lead to the review adding page (no need to implement the review adding page);
* Block with map: required implementation - interactive map (Google or Yandex Maps), width must be relative to the viewport (but not less than content layout width). Map marker can be custom or default. Map center must be relative to the layout block center;
* «Write us» button must lead to the feedback form page (no need to implement the feedback form page);

#### tablet version
* Blocks changes sizes and position according to layout;
* In logo design adds more elements;
* Main menu always opened, not depend on mobile version;

#### desktop version
* Blocks changes sizes and position according to layout;
* In logo design adds more elements;

### mishka-form.html:
* It shouldn't be a modal window on mishka-form.html page;

#### mobile version
* Must be implemented custom form elements;
* Phone and email inputs must have appropriate types for more convenient usability on mobile devices;

#### tablet version
* Blocks changes sizes and position according to layout;

#### desktop version
* Blocks changes sizes and position according to layout;

### mishka-catalog.html:

#### mobile version
* Images and product titles are links, which leads to catalog product description page (no need to implement a page with product description);
* Cart icon must trigger a modal window appear;
* Video player block «Production process»: need to be implemented a video player container (no need to add video script to page, enough to add only layout image); 

#### tablet version
* Blocks changes sizes and position according to layout;

#### desktop version
* Blocks changes sizes and position according to layout;

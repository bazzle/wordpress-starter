<?php

function acf_cat_edit() {
    echo '<style>
    #edittag{
        max-width:1200px;
    }
    </style>';
}
add_action('admin_head', 'acf_cat_edit');


function consoleLog($message) {
    echo '<script type="text/javascript">' .
    'console.log(' . '"' . $message . '"' . ');</script>';
}


function add_theme_scripts() {
    wp_enqueue_style( 'style', get_stylesheet_uri(), array(), filemtime(get_template_directory() . '/style.css'), false );
    wp_enqueue_script( 'jquery');
    wp_enqueue_script( 'main_script', get_template_directory_uri() . '/build/scripts/main.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );


add_theme_support('menus');
add_theme_support('post-thumbnails');
add_theme_support('widgets');


// register sidebars
function my_sidebars(){
    register_sidebar(
        array(
            'name' => 'Standard sidebar',
            'id' => 'standard-sidebar'
        )
    );
};
add_action('widgets_init','my_sidebars');


register_nav_menus(
    array(
        'main-menu-location' => 'Main menu location',
        'mobile-menu-location' => 'Mobile menu location',
        'footer-menu-location' => 'Footer menu location'
    )
);


function the_field_without_wpautop( $field_name ) {
	remove_filter('acf_the_content', 'wpautop');
	the_field( $field_name );
	add_filter('acf_the_content', 'wpautop');
}




//Remove Gutenberg Block Library CSS from loading on the frontend

function smartwp_remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-block-style' ); // Remove WooCommerce block CSS
} 
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );


// prevent auto p on images
function filter_ptags_on_images($content){
    return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}
add_filter('the_content', 'filter_ptags_on_images');


// prevent auto p on category descriptions
remove_filter('term_description','wpautop');









// Allows menu active states for CPT singles

function add_current_nav_class($classes, $item) {

	// Getting the current post details
	global $post;

	// Get post ID, if nothing found set to NULL
	$id = ( isset( $post->ID ) ? get_the_ID() : NULL );

	// Checking if post ID exist...
	if (isset( $id )){

		// Getting the post type of the current post
		$current_post_type = get_post_type_object(get_post_type($post->ID));

		// Getting the rewrite slug containing the post type's ancestors
		$ancestor_slug = $current_post_type->rewrite ? $current_post_type->rewrite['slug'] : '';

		// Split the slug into an array of ancestors and then slice off the direct parent.
		$ancestors = explode('/',$ancestor_slug);

		// Pages have no rewrite base, so check for parent pages and populate array with all slugs of parents
		if ( $current_post_type->name == 'page'){
			$ancestors = array();
			foreach ( get_post_ancestors($post) as $ancestor ) {
				$ancestors[] = get_post_field( 'post_name', $ancestor );
			}
		}

		$parent = array_pop($ancestors);

		// Getting the URL of the menu item
		$menu_slug = strtolower(trim($item->url));

		// Remove domain from menu slug
		$menu_slug = str_replace($_SERVER['SERVER_NAME'], "", $menu_slug);

		// If the menu item URL contains the post type's parent
		if (!empty($menu_slug) && !empty($parent) && strpos($menu_slug,$parent) !== false) {
			$classes[] = 'current-menu-item';
		}

		// If the menu item URL contains any of the post type's ancestors
		foreach ( $ancestors as $ancestor ) {
			if (!empty($menu_slug) && !empty($ancestor) && strpos($menu_slug,$ancestor) !== false) {
				$classes[] = 'current-page-ancestor';
			}
		}
	}
	// Return the corrected set of classes to be added to the menu item
	return $classes;
}
add_action('nav_menu_css_class', 'add_current_nav_class', 10, 2 );







// Disable Gutenburg

add_filter( 'use_block_editor_for_post', '__return_false' );
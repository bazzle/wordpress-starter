<?php

// CUSTOM POST TYPES ---------------------------------------------------------------

function cptui_register_my_cpts() {


    // SOLUTIONS

    $solutions_labels = [
        "name" => __( "Solutions" ),
        "singular_name" => __( "solution" ),
        "menu_name" => __( "Solutions" ),
        "add_new_item" => __( "Add new solution" ),
        "edit_item" => __("Edit solution")
    ];
    $Solutions_args = [
        "label" => __( "Solutions" ),
        "labels" => $Solutions_labels,
        "description" => "",
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "has_archive" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => true,
        "rewrite" => [ "slug" => "Solutions", "with_front" => true ],
        "query_var" => true,
        "menu_position" => 4,
        "supports" => [ "title", "editor", "thumbnail", "comments" ],
        "taxonomies" => [ "post_tag", "categories" ],
        "show_in_graphql" => false,
    ];
    register_post_type( "Solutions", $Solutions_args );


}


add_action( 'init', 'cptui_register_my_cpts' );





// TAXONOMIES -------------------------------------------------------------------



function cptui_register_my_taxes() {

	/**
	 * Taxonomy: Platforms.
	 */

	$labels = [
		"name" => __( "Global platforms", "custom-post-type-ui" ),
		"singular_name" => __( "Global category", "custom-post-type-ui" ),
	];

	
	$args = [
		"label" => __( "Global platforms", "custom-post-type-ui" ),
		"labels" => $labels,
		"public" => true,
		"publicly_queryable" => true,
		"hierarchical" => true,
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'platforms', 'with_front' => true, ],
		"show_admin_column" => false,
		"show_in_rest" => true,
		"rest_base" => "platforms",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => false,
		"show_in_graphql" => false,
	];
	register_taxonomy( "platforms", [ "solutions" ], $args );
}

add_action( 'init', 'cptui_register_my_taxes' );



// SHOW CPT's IN TAG ARCHIVE

function cpt_tags( $query ) {
    if ( $query->is_tag() && $query->is_main_query() ) {
        $query->set( 'post_type', array( 'solutions' ) );
    }
}
add_action( 'pre_get_posts', 'cpt_tags' );
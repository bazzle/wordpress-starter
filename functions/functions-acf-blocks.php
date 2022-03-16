<?php

add_action('acf/init', 'my_acf_init_block_types');
function my_acf_init_block_types() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register a card block.
        acf_register_block_type(array(
            'name'              => 'card',
            'title'             => __('Card'),
            'description'       => __('A custom card block.'),
            'render_template'   => 'includes/blocks/card.php',
            'category'          => 'widgets',
            'icon'              => 'admin-comments',
            'keywords'          => array( 'card' ),
        ));
    }
}
<?php

add_image_size('logo', 190, false);


function my_custom_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'logo' => __( 'Logo image size' )
    ) );
}
add_filter( 'image_size_names_choose', 'my_custom_sizes' );
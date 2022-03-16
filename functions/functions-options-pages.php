<?php

if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
		'page_title' 	=> 'Freshminds Settings',
		'menu_title'	=> 'Freshminds Settings',
		'menu_slug'	=> 'Freshminds_settings',
	));
}
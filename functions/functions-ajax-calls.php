<?php

// Ajax calls
function add_ajax_scripts() {
    wp_enqueue_script( 'ajaxcalls', get_template_directory_uri() . '/build/scripts/ajax_calls.js', array(), '1.0.0', true );
    wp_localize_script( 'ajaxcalls', 'ajax_object', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' )
    ) );
}
add_action( 'wp_enqueue_scripts', 'add_ajax_scripts' );


function upvote_update() {
    $post_id = $_POST['post_id'];
    $count = get_field('vote_number', $post_id);
    $count++;
    update_field( 'vote_number', $count, $post_id );
    echo $count;
    wp_die();
}

add_action( 'wp_ajax_upvote_update', 'upvote_update' );
add_action( 'wp_ajax_nopriv_upvote_update', 'upvote_update' );


function orderbypopular() {
    $thisselection = $_POST['selection'];
    $thisposttype = $_POST['posttype'];
    $thisinitialcontent = $_POST['initialcontent'];
    $ajaxposts = new WP_Query([
        'meta_key' => 'vote_number',
        'orderby' => 'meta_value_num',
        'order' => 'DESC',
        'posts_per_page' => 8,
        'post_type' => $thisposttype
    ]);
    $response = '';
    if ($ajaxposts->have_posts()) {
        while($ajaxposts->have_posts()) : $ajaxposts->the_post();
            if( $thisposttype == 'confessions' ){
                $response .= get_template_part( 'includes/section', 'posts-confessions' );
            } elseif ( $thisposttype == 'rants' ){
                $response .= get_template_part( 'includes/section', 'posts-rants' );
            } elseif ( $thisposttype == 'stories' ){
                $response .= get_template_part( 'includes/section', 'posts-stories' );
            } elseif ( $thisposttype == 'shorts' ){
                $response .= get_template_part( 'includes/section', 'posts-shorts' );
            }
        endwhile;
    } else {
        $response = 'Nothing here';
    }
    echo $response;
    wp_die();
}
add_action('wp_ajax_orderbypopular', 'orderbypopular');
add_action('wp_ajax_nopriv_orderbypopular', 'orderbypopular');
<?php

function gap() {
    ob_start(); ?>
    <div class="article__body__gap"></div>
    <?php return ob_get_clean();
}

function shortcodes_init(){
    add_shortcode('gap','gap');
}

add_action('init', 'shortcodes_init');

?>
<?php get_header(); ?>
<?php
$main_text = get_field('main_text_404','option');
?>

<div class="page">

    <?php get_template_part('includes/section','page-head'); ?>

        
        <div class="page__main panel">
            <div class="panel__inner page__main__inner">
                <?php echo $main_text ?>
            </div>
        </div>
        
        
    </div>


<?php get_footer(); ?>
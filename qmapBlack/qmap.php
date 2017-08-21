<?php
   /*
   Plugin Name: QMap-Black
   Plugin URI: placeholder
   Description: A plugin to show world map in the masthead of the website.
   Version: 1.0
   Author: sarangppande
   Author URI: www.sarangpande.me
   License: GPL2
   */

/**
* Function to add marker on the map
*/
function add_map(){
  $url =  plugins_url( 'html/test.html', __FILE__ );
	$map_div = '<div id="map-container"><div id="map"><iframe src="'
        . $url
        . '" frameborder="no" scrolling="no" width="100%" height="500px">'
        . '</iframe></div></div>';
	echo $map_div;
}
add_action('wpex_hook_header_bottom', 'add_map');


//function wpse_load_plugin_css() {
//    $plugin_url = plugin_dir_url( __FILE__ );
//    wp_enqueue_style( 'style1', $plugin_url . 'css/style1.css' );
//}

//add_action( 'wp_enqueue_scripts', 'wpse_load_plugin_css' );
?>

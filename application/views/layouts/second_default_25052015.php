<!doctype html>
<html>
<head>
<meta charset="utf-8">
<?php echo metaname;?>
<title>IndiaBizTrade</title>
<link rel="icon" href="<?php echo WEBROOT_PATH_IMAGES;?>FaviconIBS.jpg" type="image/png" />
<link rel="stylesheet" type="text/css" href="<?php echo WEBROOT_PATH_CSS;?>indiabizsaath.css" media="screen">
<link rel="stylesheet" type="text/css" href="<?php echo WEBROOT_PATH_CSS;?>popup.css" media="screen">
<link rel="stylesheet" type="text/css" href="<?php echo WEBROOT_PATH_CSS;?>jquery-ui-1.8.2.custom.css" media="screen">
<link rel="stylesheet" type="text/css" href="<?php echo WEBROOT_PATH_CSS;?>according_menu.css" media="screen">
<link rel="stylesheet" type="text/css" href="<?php echo WEBROOT_PATH_CSS;?>wysiwyg-css.css" media="screen">
<script type="text/javascript" src="<?php echo WEBROOT_PATH_JS;?>jquery.min.js"></script>
<script type="text/javascript" src="<?php echo WEBROOT_PATH_JS;?>leftbar.js"></script>
<script type="text/javascript" src="<?php echo WEBROOT_PATH_JS;?>common.js"></script>
<script type="text/javascript" src="<?php echo WEBROOT_PATH_JS;?>validation_engine/validation.js"></script>
<script type="text/javascript" src="<?php echo WEBROOT_PATH_JS;?>jquery-ui-1.8.2.custom.min.js"></script>
<script type="text/javascript" src="<?php echo WEBROOT_PATH_JS;?>ddaccordion.js"></script>
<script type="text/javascript" src="<?php echo WEBROOT_PATH_JS;?>jquery.cycle.all.js"></script>
<script type="text/javascript" src="<?php echo WEBROOT_PATH_JS;?>litetabs.jquery.js"></script>
<script language="JavaScript" type="text/javascript" src="<?php echo WEBROOT_PATH_JS;?>wysiwyg.js"></script>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=515672738549263";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<script>

var SITE_URL = '<?php echo  SITE_URL;?>';

</script>
<script type="text/javascript">
ddaccordion.init({
	headerclass: "expandable",
	contentclass: "categoryitems",
	revealtype: "click",
	mouseoverdelay: 200, 
	collapseprev: true,
	defaultexpanded: [0],
	onemustopen: false, 
	animatedefault: false, 
	persiststate: true,
	toggleclass: ["", "openheader"],
	togglehtml: ["prefix", "<img src='http://localhost/php/indiabiz/assets/img/icon_plus.png' style='width:17px; height:17px; margin:2px 10px 0px 0px; float:left;' /> ", "<img src='http://localhost/php/indiabiz/assets/img/icon_minus.png' style='width:17px; height:17px; margin:2px 10px 0px 0px; float:left;' /> "],  
	animatespeed: "fast",
	oninit:function(headers, expandedindices){ 
	},
	onopenclose:function(header, index, state, isuseractivated){ 
	}
})
</script>
<script>
		$(document).ready(function(){
		$('.example-5').liteTabs({ boxed: true, fadeIn: true });
		 showSubcatOnHover(); 
			});
			
    </script>	
</head>
<body>
<div id="page_hide">
<img src="<?php echo WEBROOT_PATH_IMAGES;?>preloaderTransparent.gif"/>
		</div>
<div id="page_hide">
<img src="<?php echo WEBROOT_PATH_IMAGES;?>AjaxLoader.gif"/>
		</div>
 <div class="modal-backdrop" style="display:none;"></div>
<div  class="modal fade"  >                     
				</div>                  
				</div>
  <div id="container" class="container_24">
  <?php echo $this->load->view('/elements/second_headre');?> 
  <?php echo $this->load->view($view_file);?> 
  <?php echo $this->load->view('/elements/user_footer');?> 
  </div>
</body>
</html>
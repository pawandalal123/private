$(document).ready(function()
{

	$("forgotPasswordLink").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		
	});
	function redirectPage() {
		window.location = linkLocation;
	}
	 $(".hide").hide();
 $(".clickshow").click(function(){
    $(".show").show();
	$(".hide_b").hide();
  });
  $(".hform").hide();
  $(".show2").click(function(){
    $(".showform").show();
	$(".hide2").hide();
  });
  $(".formsave").click(function(){
//$(".lshow").show();
	//$(".lhide").hide();
	window.location.reload();
  });
  $('.closeprofile').click(function()
  {
	// $(this).closest('form').find("input[type=text], textarea").val("");
	// $(".show").hide();
	 //$(".hide_b").show();
	 window.location.reload();
  });
  
  
      
        $("#flexiCarousel-0").flexisel({noOfItemsToScroll: 4, visibleItems:4, animationSpeed: 200});
        $("#flexiCarousel-1").flexisel({noOfItemsToScroll: 4, visibleItems:4, animationSpeed: 200});
$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();
	$(".accordion h3").click(function(){
    $(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});
  $('.replybtn2').click(function()
			{
				$('.showbox').slideUp("fast");
				var id=$(this).attr('id');
			   $('#tab-inr-bottom'+id).slideDown("fast"); 
			}); 
	
	$('#slideshow').cycle({ 
    fx: 'fade', 
    speed:  'fast', 
    timeout: 0, 
    pager:  '#nav', 
	pagerEvent: 'mouseover',
    pagerAnchorBuilder: function(idx, slide) { 
        // return selector string for existing anchor 
        return '#nav li:eq(' + idx + ') a'; 
    }     
}); 
 $('#news_s').cycle({ 
    fx:     'scrollUp', 
    timeout: 6000, 
    delay:  -2000 
});
$('#direct').click(function() { 
    $('#nav li:eq(2) a').trigger('click'); 
    return false; 
}); 
$('#slideshow2').cycle({ 
    fx: 'fade', 
    speed:  'fast', 
    timeout: 0, 
    pager:  '#nav2', 
	pagerEvent: 'mouseover',
    pagerAnchorBuilder: function(idx, slide) { 
        // return selector string for existing anchor 
        return '#nav2 li:eq(' + idx + ') a'; 
    }     
}); 
 
$('#direct2').click(function() { 
    $('#nav2 li:eq(2) a').trigger('click'); 
    return false; 
}); 
	  $('#form1').bValidator();
	  $('#loginform').bValidator();
	   $('#enquiryform').bValidator();
	   //$('#updateform').bValidator();
	       $('.statelist').change(function()
	        {
		         var state=$(this).val();
				 
				$.post(SITE_URL+'commonfunc/CityList',{'state':state},function(data,status)
		     {
				 $('.districList').html(data);
			
		          });
	
                     });
					  $('.statelistsell').change(function()
	        {
		         var state=$(this).val();
				$.post(SITE_URL+'commonfunc/CityList',{'state':state},function(data,status)
		     {
				 $('.districList').html(data);
				 $('.districhide').show();
			
		          });
	
                     });
					 
					  $('.districList').change(function()
	        {
		         var district=$(this).val();
				 
				$.post(SITE_URL+'commonfunc/districList',{'district':district},function(data,status)
		     {
				 $('.CityList').html(data);
				  $('.CityListsell').show();
			
		          });
	
                     });
					 
					 $(document).on('click','.send_to_email',function()
	        {
		         var id=$(this).attr('id');
				 var dat=(id).split('/');
				$.post(SITE_URL+'commonfunc/Submitenqiury',{'productid':dat[0],'type':dat[1]},function(data,status)
		     {
				 $('.modal').html("");
				$('.modal').html(data);
				$('.modal-backdrop').show();
				$('.modal').show();
				$('.modal-backdrop').show();
				});
				
			   $('.modal-backdrop').show();
				$('.modal').css("top","55%");
	
                     });
					 $(document).on('click','.forgetpopshow',function()
					 {
						 $('.loginpopup').hide();
						 $('.forgetpasspopup').show();
					 });
					 $(document).on('click','.loginpopupshow',function()
					 {
						 $('.forgetpasspopup').hide();
						 $('.loginpopup').show();
					 });
					 
					 $(document).on('click','.View-Lead-Details',function()
	        {
		        
				$.post(SITE_URL+'commonfunc/viewdetailslogin',function(data,status)
		     {
				 $('.modal').html("");
				$('.modal').html(data);
				$('.modal-backdrop').show();
				$('.modal').show();
				$('.modal-backdrop').show();
				});
				
			   $('.modal-backdrop').show();
				$('.modal').css("top","55%");
	
                     });
					 
					 $('.verifyEmail').click(function()
	        {
				var userId=$(this).attr('id');
		        
				$.post(SITE_URL+'commonfunc/emailVerification',{'userId':userId},function(data,status)
		     {
				 $('.modal').html("");
				$('.modal').html(data);
				$('.modal-backdrop').show();
				$('.modal').show();
				$('.modal-backdrop').show();
				});
				
			   $('.modal-backdrop').show();
				$('.modal').css("top","55%");
	
                     });
			$('.show_detail').click(function()
			{
			var id=$(this).attr('id').split('-');
			$('#reply_details'+id[1]).show();
			$('#hide-'+id[1]).show();
			$('#show-'+id[1]).hide();
            });
           $('.hide_detail').click(function()
			{
			var id=$(this).attr('id').split('-');
			$('#reply_details'+id[1]).hide();
			$('#hide-'+id[1]).hide();
			$('#show-'+id[1]).show();
            });
					 
					 $(document).on('click','.contectseller',function()
	        {
				var leadId=$(this).attr('id');
		        
				$.post(SITE_URL+'commonfunc/sellereDetails',{'leadId':leadId},function(data,status)
		     {
				 $('.modal').html("");
				$('.modal').html(data);
				$('.modal-backdrop').show();
				$('.modal').show();
				$('.modal-backdrop').show();
				});
				
			   $('.modal-backdrop').show();
				$('.modal').css("top","55%");
	
                     });
					 
					 $('.verifyMobile').click(function()
	        {
				var userId=$(this).attr('id');
		        
				$.post(SITE_URL+'commonfunc/MobilelVerification',{'userId':userId},function(data,status)
		     {
				 $('.modal').html("");
				$('.modal').html(data);
				$('.modal-backdrop').show();
				$('.modal').show();
				$('.modal-backdrop').show();
				});
				
			   $('.modal-backdrop').show();
				$('.modal').css("top","55%");
	
                     });
					 
					 		   $(document).on('click','.close',function()
	        {
				 $('.modal-backdrop').hide();
				$('.modal').hide();
			});
					 
					   $('.categorylist').change(function()
	        {
		         var category=$(this).val();
				 
				$.post(SITE_URL+'commonfunc/categorylist',{'category':category},function(data,status)
		     {
				 $('.subcategory').html(data);
			
		          });
	
                     });
					 $('.subcategory').change(function()
	        {
		         var subcatId=$(this).val();
				 
				$.post(SITE_URL+'commonfunc/brandDetailsmanage',{'subcatId':subcatId},function(data,status)
		     {
				 $('.brandId').html(data);
			
		          });
	
                     });
					 
					 $('.companycahnge').change(function()
	        {
		         var company=$(this).val();
				 var type=$('.type').attr('id');
				 
				$.post(SITE_URL+'commonfunc/bussinessDetails',{'company':company,'type':type},function(data,status)
		     {
				 $('.mybussiness').html(data);
			
		          });
	
                     });
					 
					 $('.RegistrationDetails').change(function()
	        {
		         var company=$(this).val();
				 var type=$('.RegistrationDetailstype').attr('id');
				 
				$.post(SITE_URL+'commonfunc/bussinessDetails',{'company':company,'type':type},function(data,status)
		     {
				 $('.RegistrationDetailsShow').html(data);
			
		          });
	
                     });
					 
					 
					 $('.categorylistsell').change(function()
	        {
		         var category=$(this).val();
				 
				$.post(SITE_URL+'commonfunc/categorylistsell',{'category':category},function(data,status)
		     {
				 $('.subcategorysellproduct').html(data);
				 $('#passwordstataus').html('<span class="f11 et1 nt bnr" style="margin-bottom: 4px; margin-top: 11px; margin-left: 225px; display: block;" id="id_exist">&nbsp;</span>').show();
				 
				 
				 
			
		          });
	
                     });
					  $('.categorylistsellmanage').change(function()
	        {
		         var category=$(this).val();
				 
				$.post(SITE_URL+'commonfunc/categorylistsellmange',{'category':category},function(data,status)
		     {
				 $('.subcategory').html(data);
				 			
		          });
	
                     });
					
					 
					 $('#email').blur(function()
	        {
		           var email=$(this).val();
				   if(email=='')
				   {
					   $('#emailresonse').hide();
					   $('#emailre').hide();
				   }
				   if(email.length>4)
				   {
				 
				$.post(SITE_URL+'commonfunc/CheckEmail',{'email':email},function(data,status)
		     {
				// $('.subcategory').html(data);
				
				if(data==1)
				{
					$('#emailresonse').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; display: block;" id="id_exist">&nbsp;This Email Id is already registered with Us, <br><a href="javascript:;" class="View-Lead-Details">login here</a> OR enter a new ID to continue the free registration.</span>').show();
					$('#emailre').hide();
					$(".btn-blue").attr("disabled", 'disabled');
				}
				if(data==0)
				{
					
					$('#emailre').html('<span class="f11 et1 nt bnr" style="margin-bottom: 4px; display: block;" id="id_exist">&nbsp;Email Id available for registration</span>').show();
					$('#emailresonse').hide();
					$(".btn-blue").removeAttr('disabled');
				}
			
		          });
				   }
	
                     });
					  $(document).on('keypress','#password',function(event){
                        if(event.keyCode == 13){
					    checklogin();
				           }
					  });
					 
					 $('#emailforgetpass').keypress(function(event){
                  if(event.keyCode == 13){
		           var email=$('#emailforgetpass').val();
				   var emailRegex =new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
				   var valid = emailRegex.test(email);
				  if (!valid || email=='') {
					  $('#emailresonse').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; display: block; margin-left:40px;" id="id_exist">&nbsp;Please Enter Valid Email Id.</span>').show();;
					   $('#emailre').hide();
					return false;
				     }
				   
				   else
				   {
				 
				$.post(SITE_URL+'commonfunc/changePasswordRequest',{'email':email},function(data,status)
		     {
				// $('.subcategory').html(data);
				
				if(data==0)
				{
					$('#emailresonse').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; margin-left:40px; display: block;" id="id_exist">&nbsp;Email Id Does Not Register With Us.</span>').show();
					$('#emailre').hide();
					$(".btn-blue").attr("disabled", 'disabled');
				}
				if(data==1)
				{
					
					$('#emailre').html('<span class="f11 et1 nt bnr" style="margin-bottom: 4px; margin-left:40px; display: block;" id="id_exist">&nbsp;Password Is Changed Check Your Email. </span>').show();
					$('#emailresonse').hide();
						$("#emailforgetpass").val('');
				}
			
		          });
				   }
				  }
                     
					 });
					 $(document).on('click','.passwordregenrate',function()
	        {
		           var email=$('#emailforgetpass').val();
				   var emailRegex =new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
				   var valid = emailRegex.test(email);
				   if (!valid || email=='') {
					  $('#emailresonse').html('<div class="alert alert-error fade in"><button type="button" class="close close-sm" data-dismiss="alert"><i class="fa fa-times"></i></button><strong>Please Enter Valid Email Id</strong> </div>').show();
					   $('#emailre').hide();
					   return false;
				       }
				   
				    else
				    {
						$('#page_hide').show();
				 
				$.post(SITE_URL+'commonfunc/changePasswordRequest',{'email':email},function(data,status)
		     {
				// $('.subcategory').html(data);
				
				if(data==0)
				{
					$('#page_hide').hide();
					$('#emailresonse').html('<div class="alert alert-error fade in"><button type="button" class="close close-sm" data-dismiss="alert"><i class="fa fa-times"></i></button><strong>Please Enter Valid Email Id</strong> </div>').show();
					$('#emailre').hide();
					$(".btn-blue").attr("disabled", 'disabled');
				}
				if(data==1)
				{
					$('#page_hide').hide();
					$('#emailre').html('<div class="alert alert-success fade in"><button type="button" class="close close-sm" data-dismiss="alert"><i class="fa fa-times"></i></button><strong>Password Is Changed Check Your Email</strong> </div>').show();
					    $('#emailresonse').hide();
						$("#emailforgetpass").val('');
				}
			
		          });
				   }
	
                     });
					  $('#oldpassword').blur(function()
	        {
		           var oldpassword=$(this).val();
				   var userId=$('.userid').attr('id');
				   if(oldpassword=='')
				   {
					   $('#emailresonse').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;Please Enter Password,<br><a href="http://www.indiabiztrade.com/category/forgetPass">Forget Password</a></span>').show();
					$('#emailre').hide();
				   }
				   if(oldpassword.length>4)
				   {
				 
				$.post(SITE_URL+'commonfunc/Checkpassword',{'userId':userId,'oldpassword':oldpassword},function(data,status)
		     {
				// $('.subcategory').html(data);
				
				if(data==1)
				{
					$('#emailresonse').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;Incorrect Password,<br><a href="">Forget Password</a></span>').show();
					$('#emailre').hide();
				}
				if(data==0)
				{
					
					$('#emailre').html('<span class="f11 et1 nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;Password Is Correct</span>').show();
					$('#emailresonse').hide();
				}
			
		          });
				   }
				   
	
                     });
					 $('.changepassword').click(function()
					 {
				   var oldpassword=$('#oldpassword').val();
				  // alert(oldpassword);
				   var userId=$('.userid').attr('id');
				   if(oldpassword=='')
				   {
					   $('#emailresonse').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;Please Enter Password,<br><a href="http://www.indiabiztrade.com/category/forgetPass">Forget Password</a></span>').show();
					$('#emailre').hide();
				   }
				   if(oldpassword.length>4)
				   {
				 
				$.post(SITE_URL+'commonfunc/Checkpassword',{'userId':userId,'oldpassword':oldpassword},function(data,status)
		     {
				// $('.subcategory').html(data);
				
				if(data==1)
				{
					$('#emailresonse').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;Incorrect Password,<br><a href="">Forget Password</a></span>').show();
					$('#emailre').hide();
				}
				if(data==0)
				{
					
					$('#emailre').html('<span class="f11 et1 nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;Password Is Correct</span>').show();
					$('#emailresonse').hide();
					var newpassword=$('#newpassword').val();
					var newpasswordre=$('#newpasswordmatch').val();
					if(newpassword=='')
					{
					$('#passwordstataus').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;Please Enter New Password</span>').show();
					return false();
					}
					
					if(newpassword!=newpasswordre )
					{
					$('#passwordstataus').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;New & Confirm Password Do not Match</span>').show();
					return false();
					}
					if(newpassword==oldpassword)
					{
						$('#passwordstataus').html('<span class="f11 edup nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;Old & New Password Should Not Be Same</span>').show();
						return false();
					}
					else
					{
						$.post(SITE_URL+'commonfunc/changepasswords',{'userId':userId,'newpassword':newpassword},function(data,status)
						{
							$('#passwordstataus').html('<span class="f11 et1 nt bnr" style="margin-bottom: 4px; margin-top: 37px; display: block;" id="id_exist">&nbsp;Password Is Change</span>').show();
							$('#newpassword').val('');
							$('#newpasswordmatch').val('');
							$('#oldpassword').val('');
						});
					}
				}
			
		          });
				   }
					 });
					 $(document).on('change','.subcategorysell',function()
					 {
						 var subcatId=$(this).val()
						 $.post(SITE_URL+'commonfunc/brandDetails',{'subcatId':subcatId},function(data,status)
						 {
							 $('.brand').html(data);
							 $('#passwordst').html('<span class="f11 et1 nt bnr" style="margin-bottom: 4px; margin-top: 11px; margin-left: 225px; display: block;" id="id_exist">&nbsp;</span>').show();
						 });
					 });
					 
					// $('.griddata').click(function()
//					 {
//						  $('.listdata').removeClass('list_view_active');
//						  $('.griddata').addClass('list_view_active');
//						 $('.list_view_result1').hide();
//						  $('.grid_view_result1').show();
//					 });
//					 $('.listdata').click(function()
//					 {
//						 $('.griddata').removeClass('list_view_active');
//						  $('.listdata').addClass('list_view_active');
//						 $('.list_view_result1').show();
//						  $('.grid_view_result1').hide();
//					 });

$('.productshort').change(function()
{
	var type=$(this).attr('id');
	var pageNumber = $('.pagenumber').attr('id');
	if(type=='grid')
	{
	str = SITE_URL+'all-results-grid/'+$(this).val()+'/'+pageNumber;
	//str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	}
	else
	{
	str = SITE_URL+'all-results/'+$(this).val()+'/'+pageNumber;
	//str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	}
});

$('.searchfilter').change(function()
{
	var id=$(this).attr('id');
	var type=$('.hidden').val();
	var option=$(this).val();
		
	if(id=='grid')
	{
	str = SITE_URL+'search/searchProductGrid/'+type+'/'+$(this).val();
	//str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	}
	else
	{
	str = SITE_URL+'search/searchProduct/'+type+'/'+$(this).val();
	//str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	}
});

$('.suibcategoryfiter').change(function()
{
	var id=$(this).attr('id');
	var option=$(this).val();
	
	if(id=='grid')
	{
	str = option;
	//str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	}
	else
	{
	str = option;
	//str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	}
});

 $('#textarea1').keyup(function()
 {
	 alert('fds');
 });


$('.categoryfiter').change(function()
{
	var id=$(this).attr('id');
	var type=$('.hidden').val();
	var option=$(this).val();
	var pageNumber = $('.pagenumber').attr('id');
	alert(pageNumber);
	
	if(id=='grid')
	{
	str = SITE_URL+'addgrid/'+type+'/'+$(this).val()+'/'+pageNumber;
	//str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	}
	else
	{
	str = SITE_URL+'add/'+type+'/'+$(this).val()+'/'+pageNumber;
	//str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	}
});

$('.checkbox').click(function()
{
	var url=$(this).attr('id');
	//alert(url);
	window.location = url;
});
     var type=$('.suggestionupdateCity').attr('id');
	 var type1=$('.suggestionupdatestate').attr('id');
	 var type2=$('.suggestionupdatepincode').attr('id');
    $('.suggestionupdateCity').autocomplete({
		 source:SITE_URL+'commonfunc/suggestionscontect'+"?search_field=" +type,
			minLength:3,
		});
		$('.suggestionupdatestate').autocomplete({
		 source:SITE_URL+'commonfunc/suggestionscontect'+"?search_field=" +type1,
			minLength:3,
		}); 
		$('.suggestionupdatepincode').autocomplete({
		 source:SITE_URL+'commonfunc/suggestionscontect'+"?search_field=" +type2,
			minLength:3,
		}); 
		
		$(".add_product_box").hide();
        $(".add_product_but").click(function(){
        $(".add_product_box_s").show();
     	$(".manage_list1").hide();
        });
   $(".add_product_close").click(function(){
	$(".add_product_box_h").hide();
   });
   
   $(".tabContent").not(":first").hide(); 
	$("ul.tabs li:first").addClass("active").show();  
	$("ul.tabs li").click(function() {
		$("ul.tabs li.active").removeClass("active"); 
		$(this).addClass("active"); 
		$(".tabContent").hide();		
		$($('a',this).attr("href")).fadeIn('slow'); 
		return false;
	});
	
	$('.editdetails').click(function()
	{ 
	    $('.items').hide();
		$('.box').show();
	    var id=$(this).attr('id');
		$('.detailslist'+id).css("display","none");
		$('.editbox'+id).show();
		
	});
	$('.hideupdate').click(function()
	{
		var id=$(this).attr('id');
		$('.editbox'+id).css("display","none");
		$('.detailslist'+id).show();
	});
    
    $(document).on("change","#imgInp",function(){
        readURL(this);
    });
	
	$('#subscriptionEmail').keypress(function(event){
  if(event.keyCode == 13){
    var email=$('#subscriptionEmail').val();
		var emailRegex =new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
        var valid = emailRegex.test(email);
        if (!valid) {
		  alert("Invalid e-mail address");
          return false;
	     }
		 else
		 {
			 $('#page_hide').show();
			 $.post(SITE_URL+'commonfunc/CheckEmail',{'email':email},function(data,status)
		     {
				 if(data==1)
				 {
					  $('#page_hide').hide();
					 alert('Email Already Exits');
				 }
				 else
				 {
			 $.post(SITE_URL+'commonfunc/newssubscription',{'email':email},function(data,status)
		     {
				 if(data==1)
				 {
				 $('#page_hide').hide();
				 alert("Successfully Register");
				 $('#subscriptionEmail').html();
				 }
		          });
				 }
				  });
		 }
  }
});
	
	$('#submitSubscription').click(function()
	{
		var email=$('#subscriptionEmail').val();
		var emailRegex =new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
        var valid = emailRegex.test(email);
        if (!valid) {
		  alert("Invalid e-mail address");
          return false;
	     }
		 else
		 {
			 $('#page_hide').show();
			 $.post(SITE_URL+'commonfunc/CheckEmail',{'email':email},function(data,status)
		     {
				 if(data==1)
				 {
					  $('#page_hide').hide();
					 alert('Email Already Exits');
				 }
				 else
				 {
			 $.post(SITE_URL+'commonfunc/newssubscription',{'email':email},function(data,status)
		     {
				 if(data==1)
				 {
				 $('#page_hide').hide();
				 alert("Successfully Register");
				 $('#subscriptionEmail').html();
				 }
		          });
				 }
				  });
		 }
	});
	
	    $('#productservice').autocomplete({
		
		
		
		   								source:SITE_URL+'commonfunc/suggestions',
										minLength:3,
										select:function(evt, ui)
		{
						this.form.subcat.value = ui.item.subcat;
						this.form.catid.value = ui.item.catId;
		}
		});
		$('#productserviceadd').autocomplete({
		
		
		
		   								source:SITE_URL+'commonfunc/suggestions',
										minLength:3,
										select:function(evt, ui)
		{
						this.form.subcat.value = ui.item.subcat;
						this.form.catid.value = ui.item.catId;
		}
		});
		
		
		 $(document).on('click','.selectallenquiery',function () {
                  if($(this).is(":checked")){
                $('.checkBoxClass').prop('checked', true);
                 }
		     else{
               $('.checkBoxClass').prop('checked', false);
                }
                });	
          $(document).on('click','.checkBoxClass',function(){
 
        if($(".checkBoxClass").length == $(".checkBoxClass:checked").length) {
            $(".selectallenquiery").attr("checked", "checked");
        } else {
            $(".selectallenquiery").removeAttr("checked");
        }
 
    });

       $('.enquirystatus').click(function()
	   {
		   if($('.selectallenquiery').is(":checked"))
		   {
			    $('.checkBoxClass').prop('checked', true);
				var uid=[];
				$(".checkBoxClass:checked").each(function(i)
				{
				 uid[i]=$(this).attr('id');
				 
				});
		   }
		   else
		   {
			   
			    var uid=new Array();
				$('.checkBoxClass').each(function(){
				if($(this).is(":checked"))
				{
				uid.push($(this).attr("id"));
				}
				});
		   }
		   if(uid=='')
		   {
			   alert('No Enquiry Is selected');
		   }
		   else
		   {
			   
			   $('#page_hide').show();
			   var type=$(this).attr('id');
			  $.post(SITE_URL+'commonfunc/enquirystatus',{'uid':uid,'type':type},function(data,status)
		     {
				 $('#page_hide').hide();
				 var uid_len = uid.length;
				for(var i=0; i < uid_len ; i++ ){
					$('.listbox'+uid[i]).hide();
				}
				 
			 });
			   
		   }
					  
	     	  });  
			  
			  
			  
			  
			  $('.chkbox').click(function(){
		//var i=0;
		$(this).each(function()
		{
			if($(this).is(":checked"))
				{
	var value =('<li class="catgoey'+$(this).val().split('-')[1]+'">'+$(this).val().split('-')[0]+'<a rel="'+$(this).val().split('-')[0]+'"  id="'+$(this).val().split('-')[1]+'"  class="remove" style="text-decoration:none;">×</a></li>');
	value1 = value + "<br>";
     $(".preference_list_right").append(value).show();
			}
			else
			{
     $(".catgoey"+$(this).val().split('-')[1]).hide();
	 if($('.chkbox:checked').length==0)
		{
			$('.preference_list_right').hide();
			
		}
			}
		});
	});
	$(document).on('click','.remove',function()
	{
		var id=$(this).attr('id');
		//var value=$(this).attr('rel');
		$('.catgoey'+id).hide();
		$('#remove'+id).removeAttr("checked");
		if($('.chkbox:checked').length==0)
		{
			$('.preference_list_right').hide();
			
		}
		
	});
	$('.addmorecat').click(function()
			  {
				  uid=Array();
				  $('.chkbox').each(function()
		         {
			  if($(this).is(":checked"))
				{
					uid.push($(this).val().split('-')[1]);
					//alert(uid);
				};
				});
				if(uid=='')
				{
					alert('Please Select One Id');
				}
				else
				{
					$.post(SITE_URL+'commonfunc/productprefrence',{'uid':uid},function(data,status)
					{
					   var uid_len = uid.length;
				       for(var i=0; i < uid_len ; i++ )
					   {
					  $('#remove'+uid[i]).removeAttr("checked");
					//  $('.preference_list_right').hide();
				       }
					   });
				}
		
			  });
			  
			  $('.searchbuyleads').keyup(function()
			  {
				  var searchfeild=$(this).val();
				  if(searchfeild=='')
				  {
					  window.location.reload();
				  }
				  else
				  {
				  $.post(SITE_URL+'commonfunc/searchbuyleads',{'searchfeild':searchfeild},function(data,status)
		     {
				 $('.lead-box').html(data);
			 });
				  }
			  });
			  
			  $('.paynow').click(function()
			  {
				  var planId=$(this).attr('id');
				  var amount=$('.amount'+planId).attr('id');
				   $.post(SITE_URL+'commonfunc/paymentattempt',{'planId':planId,'amount':amount},function(data,status)
		     {
				  $('#pawan').submit();
			 });
			  });
			  $('.deletefeature').click(function()
			  {
					var featureId=$(this).attr('id');
				    $('#page_hide').show();
					$.post(SITE_URL+'commonfunc/DeleteFeature',{'featureId':featureId},function(data,status)
		     {
				  $('#page_hide').hide();
				  alert('Successfully Deleted');
				  $('#hidefeature'+featureId).hide();
			 });
			 
			 
			  });
			  $('.DeleteUsedProduct').click(function()
			  {
					var productid=$(this).attr('id');
				    $('#page_hide').show();
					$.post(SITE_URL+'commonfunc/DeleteUsedProduct',{'productid':productid},function(data,status)
		     {
				  $('#page_hide').hide();
				  alert('Successfully Deleted');
				  $('.detailslist'+productid).hide();
			 });
			  });
			  $('.testdelete').click(function()
			  {
					var featureId=$(this).attr('id');
				    $('#page_hide').show();
					$.post(SITE_URL+'commonfunc/DeleteFeatureTest',{'featureId':featureId},function(data,status)
		     {
				  $('#page_hide').hide();
				  alert('Successfully Deleted');
				  $('#hide'+featureId).hide();
			 });
			 
			  });
			  $('.deleteNews').click(function()
			  {
					var featureId=$(this).attr('id');
				    $('#page_hide').show();
					$.post(SITE_URL+'commonfunc/DeleteFeatureNews',{'featureId':featureId},function(data,status)
		     {
				  $('#page_hide').hide();
				  alert('Successfully Deleted');
				  $('#hide'+featureId).hide();
			 });
			 
			  });
			   $('.bussinessDelete').click(function()
			  {
					var featureId=$(this).attr('id');
				    $('#page_hide').show();
					$.post(SITE_URL+'commonfunc/bussinessDelete',{'featureId':featureId},function(data,status)
		     {
				  $('#page_hide').hide();
				  alert('Successfully Deleted');
				  $('.detailslist'+featureId).hide();
			 });
			 
			  });
			  
			  $('.deleteproduct').click(function()
			  {
				  var featureId=$(this).attr('id');
				    $('#page_hide').show();
					$.post(SITE_URL+'commonfunc/productDelete',{'featureId':featureId},function(data,status)
		     {
				  $('#page_hide').hide();
				  alert('Successfully Deleted');
				  $('.detailslist'+featureId).hide();
			 });
				  });
			 
$(function() {

    var $el, leftPos, newWidth;
       
    $("#example-one").append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
    $("#example-one li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
            $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    
    
});

       $('.companyhomecontent').change(function()
	   {
		  // alert('pawan');
		    var CompId=$(this).val();
			if(CompId=='')
			{
				alert('Please Select Company or Register Your Company');
				$('#textarea1').hide();
				$('#textarea2').hide();
				 $('.formsavehome').attr("disabled", 'disabled');
				return false;
			}
			else
			{
				    $('#page_hide').show();
					$.post(SITE_URL+'commonfunc/homecontentDispaly',{'CompId':CompId},function(data,status)
		     {
				 // var Obj = JSON.parse(data);
				  //alert(Obj.key_description)
				  $('#page_hide').hide();
				  $('.homecontent').html('');
				  $('.homecontent').html(data);
				   generate_wysiwyg('textarea1');
				   generate_wysiwyg('textarea2');
				   $('.formsavehome').removeAttr('disabled');
				  //$('.detailslist'+featureId).hide();
			 });
			}
	   });
		});
		
		function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();            
            reader.onload = function (e) {
                $('#target').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
function readURLChangeImage(input) {
		   var imageId = ($(input).attr("id")).split('getimageID');
		   if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imgstore'+imageId[1]).css('background-image', 'url('+e.target.result+')');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
		
		function readURLChangeImagesell(input) {
		   var imageId = ($(input).attr("id")).split('getimage');
		   if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#pimgstore'+imageId[1]).css('background-image', 'url('+e.target.result+')');
					$('#change_pic'+imageId[1]).hide()
                }
                reader.readAsDataURL(input.files[0]);
            }
        }


function CheckDataSearchProduct(Form)
{

var feild=$('#textfield').val();
if (feild=='')
{	
	
	alert("Please enter a valid text to search.");
	
	return false;
}
while(feild.indexOf('  ')>0){
feild= feild.replace('  ',' ');
}
if (feild.replace(/\s/g, '').match(/^[^0-9a-zA-Z ]+$/)){
	alert("Enter at least one alphanumeric characters for search.");
	
	return false;
}
var temp=feild.replace(/\s/g, '');
if (temp.length < 3){
	alert("Please enter a valid text to search.");
	;
	return false;
}
else if (feild.replace(/\s/g, '').length > 119){
		alert("Enter less than 120 characters for search.");
		
		return false;
}
else
{
	var str = feild.replace(/\s/g, '-');
		str =escape(str);
	str = SITE_URL+'search/searchProduct/'+str;
	str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	return false;
 }
}
function CheckDataSearch(Form)
{
try{sugg.recentSearches(Form.ss.value)}catch(e){}
var re = /(Enter\s+.*?Search)/i;
if (Form.ss.value.match( re ))
{	
	var found = Form.ss.value.replace('...', ' ');
	found = found.replace(/\s+$/g, '');
	alert("Please enter a valid text to search.");
	Form.ss.focus();
	return false;
}
while(Form.ss.value.indexOf('  ')>0){
Form.ss.value = Form.ss.value.replace('  ',' ');
}
if (Form.ss.value.replace(/\s/g, '').match(/^[^0-9a-zA-Z ]+$/)){
	alert("Enter at least one alphanumeric characters for search.");
	Form.ss.focus();
	return false;
}
var temp=Form.ss.value.replace(/\s/g, '');
if (temp.length < 3){
	alert("Please enter a valid text to search.");
	Form.ss.focus();
	return false;
}
else if (Form.ss.value.replace(/\s/g, '').length > 119){
		alert("Enter less than 120 characters for search.");
		Form.ss.focus();
		return false;
}
else 
{
	var str = Form.ss.value.replace(/\s/g, '-');
	if(Form.variant.value == "Products"){
	str =escape(str);
	str = SITE_URL+'productsearch/'+str;
	str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	return false;
} 
	else if(Form.variant.value == "BuyLeads"){
	str =escape(str);
	str = SITE_URL+'LeadsSearch/'+str;
	str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	return false;
}
else if(Form.variant.value == "Suppliers"){
	str =escape(str);
	str = SITE_URL+'search/searchProduct/'+str;
	str = myReplace(str,"\\\\?\\\\&","?");
	window.location = str;
	return false;
}

}}
function myReplace(str, a, b) {var re = new RegExp(a, "g");
var ret = str.replace(re,b);return ret;}
function auto_ready()
{
$(document).ready(function() {
	    $('.hk-search-box').attr("placeholder", 'Enter product / service or company name to search');
		  $('#variant-id').attr("value","Products");	
	      var variant_id = $('#variant-id').val();
	      $('.hk-search-box').autocomplete({
		   								source:SITE_URL+'commonfunc/suggestions'+"?search_field=" +variant_id,
										minLength:3
										});

$("#selectpropduct").change(function() { 
if($(this).val() == "Suppliers") {
	  $('.hk-search-box').attr("placeholder", 'Enter product / service or company name to search');
	  $('#variant-id').attr("value","Suppliers")
    }
else if($(this).val() == "Products") {
	$('.hk-search-box').attr("placeholder", 'Enter product / service to search');
	$('#variant-id').attr("value","Products")
}

else if($(this).val() == "BuyLeads") {
	$('.hk-search-box').attr("placeholder", 'Enter product / service to search');
	$('#variant-id').attr("value","BuyLeads")
}else {
	$('.hk-search-box').attr("placeholder", 'Enter product / service or company name to search');
		$('#variant-id').attr("value","Products");	
	}
          var variant_id = $('#variant-id').val();
	      $('.hk-search-box').autocomplete({
		   								source:SITE_URL+'commonfunc/suggestions'+"?search_field=" +variant_id,
										minLength:3,
									//	select:function(evt, ui)
		//{
					//	this.form.inputhidden.value = ui.item.type;
		//}
		});
})
});
}

function checklogin()
{
	var email=$('#email').val();
	var password=$('#password').val();
	
     if (email!='') {
		
		$.post(SITE_URL+'commonfunc/CheckuserLogin',{'email':email,'password':password},function(data,status)
		     {
				 if(data==1)
				 {
					 window.location.reload();
				 }
				 else
				 {
					 alert('Icorrect Email Id');
				 }
			 });
	 }
	 else
	 {
		 alert('Enter The Email Id');
	 }

}


function mailsend()
{
	var id=$('.for').attr('id');
	var email=$('#email').val();
	var senedname=$('#name').val();
	var message=$('#requirment').val();
	var Mobile=$('#Mobile').val();
	var emailRegex =new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
    var phonemsg=new RegExp(/^(0-?)?(\([0-9]\d{2}\)|[0-9]\d{2})-?[0-9]\d{2}-?\d{4}$/i);
    var mobvalid=phonemsg.test(Mobile)
    var valid = emailRegex.test(email);
     if (!valid) {
		 alert("Invalid e-mail address");
        return false;
	 }

     if (!mobvalid)
	 {
         alert("Invalid Mobile No");
          return false;
     }
	 
	 else
	 {
		 	$.post(SITE_URL+'commonfunc/AddsendMobile',{'senedname':senedname,'email':email,'message':message,'Mobile':Mobile,'id':id},function(data,status)
		     {
				// $('.subcategory').html(data);
				if(data==1)
				{
					 alert('Successfully Send');
					 $('#lightpec'+id).hide();
					 $('.modal-backdrop').hide();
				     $('.modal').hide();
				}
			 });
	 }
}

function mailsendfreind()
{
	var id=$('.for').attr('id');
	var email=$('#email').val();
	var Mobile=$('#Mobile').val();
	var toemail=$('#emailto').val();
	var message=$('#requirment').val();
	var emailRegex =new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
	var phonemsg=new RegExp(/^(0-?)?(\([0-9]\d{2}\)|[0-9]\d{2})-?[0-9]\d{2}-?\d{4}$/i);
    var mobvalid=phonemsg.test(Mobile)
    var valid = emailRegex.test(email);
     if (!valid) {
		 alert("Invalid e-mail address");
        return false;
	 }

     if (!mobvalid)
	 {
         alert("Invalid Mobile No");
          return false;
     }
   
    
    	 
	 else
	 {
		 	$.post(SITE_URL+'commonfunc/sendtoFreind',{'email':email,'toemail':toemail,'Mobile':Mobile,'message':message,'id':id},function(data,status)
		     {
				// $('.subcategory').html(data);
				if(data==1)
				{
					alert('Successfully Send');
					 $('.modal-backdrop').hide();
				     $('.modal').hide();
				}
			 });
	 }
}


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function prepareInputsForHints() {
	var inputs = document.getElementsByTagName("input");
	for (var i=0; i<inputs.length; i++){
		// test to see if the hint span exists first
		if (inputs[i].parentNode.getElementsByTagName("span")[0]) {
			// the span exists!  on focus, show the hint
			inputs[i].onfocus = function () {
				this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
			}
			// when the cursor moves away from the field, hide the hint
			inputs[i].onblur = function () {
				this.parentNode.getElementsByTagName("span")[0].style.display = "none";
			}
		}
	}
	// repeat the same tests as above for selects
	var selects = document.getElementsByTagName("select");
	for (var k=0; k<selects.length; k++){
		if (selects[k].parentNode.getElementsByTagName("span")[0]) {
			selects[k].onfocus = function () {
				this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
			}
			selects[k].onblur = function () {
				this.parentNode.getElementsByTagName("span")[0].style.display = "none";
			}
		}
	}
}
addLoadEvent(prepareInputsForHints);

   function showSubcatOnHover(){
	var catmouseover = {over:menushow, out:menuhide, timeout:300};
    $('.dropdownsubcat .cataloglist li').hoverIntent(catmouseover);
    function menushow(){$(this).find('.cataloglistexpand').show();}
    function menuhide(){$(this).find('.cataloglistexpand').hide();}
}

(function (a) {
    a.fn.flexisel = function (m) {
        var e = a.extend({
            visibleItems: 3,
            noOfItemsToScroll: 1,
            animationSpeed: 200,
            autoPlay: false,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            setMaxWidthAndHeight: false,
            enableResponsiveBreakpoints: false,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 640,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 768,
                    visibleItems: 3
                }
            }
        }, m);
        var f = a(this);
        var d = a.extend(e, m);
        var j;
        var k = true;
        var g = d.visibleItems;
        var l = d.noOfItemsToScroll;
        var h = l < f.children().length ? true : false;
        var b = [];
        var c = {
            init: function () {
                return this.each(function () {
                    c.appendHTML();
                    c.setEventHandlers();
                    c.initializeItems()
                })
            },
            initializeItems: function () {
                var q = f.parent();
                var p = q.height();
                var o = f.children();
                c.sortResponsiveObject(d.responsiveBreakpoints);
                var n = q.width();
                j = (n) / g;
                o.width(j);
                if (h) {
                    o.last().insertBefore(o.first());
                    o.last().insertBefore(o.first());
                    f.css({
                        left: -j
                    })
                }
                f.fadeIn();
                a(window).trigger("resize")
            },
            appendHTML: function () {
                var p = f.children();
                f.addClass("nbs-flexisel-ul");
                f.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");
                f.find("li").addClass("nbs-flexisel-item");
                if (d.setMaxWidthAndHeight) {
                    var q = a(".nbs-flexisel-item img").width();
                    var o = a(".nbs-flexisel-item img").height();
                    a(".nbs-flexisel-item img").css("max-width", q);
                    a(".nbs-flexisel-item img").css("max-height", o)
                }
                a("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(f);
                if (h) {
                    var n = p.clone();
                    f.append(n)
                }
            },
            setEventHandlers: function () {
                var p = f.parent();
                var o = f.children();
                var q = p.find(a(".nbs-flexisel-nav-left"));
                var n = p.find(a(".nbs-flexisel-nav-right"));
                a(window).on("resize", function (s) {
                    c.setResponsiveEvents();
                    var r = a(p).width();
                    var t = a(p).height();
                    j = (r) / g;
                    o.width(j);
                    if (h) {
                        f.css({
                            left: -j
                        })
                    } else {
                        q.addClass("disabled");
                        n.addClass("disabled")
                    }
                    var u = (q.height()) / 2;
                    var v = (t / 2) - u;
                    q.css("top", v + "px");
                    n.css("top", v + "px")
                });
                if (h) {
                    a(q).on("click", function (r) {
                        c.scrollLeft()
                    });
                    a(n).on("click", function (r) {
                        c.scrollRight()
                    })
                }
                if (d.pauseOnHover) {
                    a(".nbs-flexisel-item").on({
                        mouseenter: function () {
                            k = false
                        },
                        mouseleave: function () {
                            k = true
                        }
                    })
                }
                if (d.autoPlay) {
                    setInterval(function () {
                        if (k) {
                            c.scrollRight()
                        }
                    }, d.autoPlaySpeed)
                }
            },
            setResponsiveEvents: function () {
                var n = a("html").width();
                if (d.enableResponsiveBreakpoints) {
                    var p = b[b.length - 1].changePoint;
                    for (var o in b) {
                        if (n >= p) {
                            g = d.visibleItems;
                            break
                        } else {
                            if (n < b[o].changePoint) {
                                g = b[o].visibleItems;
                                break
                            } else {
                                continue
                            }
                        }
                    }
                }
            },
            sortResponsiveObject: function (p) {
                var n = [];
                for (var o in p) {
                    n.push(p[o])
                }
                n.sort(function (r, q) {
                    return r.changePoint - q.changePoint
                });
                b = n
            },
            scrollLeft: function () {
                if (k) {
                    k = false;
                    var p = f.parent();
                    var n = p.width();
                    j = (n) / g;
                    j = j * d.noOfItemsToScroll;
                    var o = f.children();
                    f.animate({
                        left: "+=" + j
                    }, {
                        queue: false,
                        duration: d.animationSpeed,
                        easing: "linear",
                        complete: function () {
                            for (var q = o.length - d.noOfItemsToScroll; q < o.length; q++) {
                                o.eq(q).insertBefore(o.first())
                            }
                            c.adjustScroll();
                            k = true
                        }
                    })
                }
            },
            scrollRight: function () {
                if (k) {
                    k = false;
                    var p = f.parent();
                    var n = p.width();
                    j = (n) / g;
                    j = j * d.noOfItemsToScroll;
                    var o = f.children();
                    f.animate({
                        left: "-=" + j
                    }, {
                        queue: false,
                        duration: d.animationSpeed,
                        easing: "linear",
                        complete: function () {
                            for (var q = d.noOfItemsToScroll - 1; q >= 0; q--) {
                                o.eq(q).insertAfter(o.last())
                            }
                            c.adjustScroll();
                            k = true
                        }
                    })
                }
            },
            adjustScroll: function () {
                var p = f.parent();
                var o = f.children();
                var n = p.width();
                j = (n) / g;
                o.width(j);
                f.css({
                    left: -j
                })
            }
        };
        if (c[m]) {
            return c[m].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof m === "object" || !m) {
                return c.init.apply(this)
            } else {
                a.error('Method "' + method + '" does not exist in flexisel plugin!')
            }
        }
    }
})(jQuery);


   

	
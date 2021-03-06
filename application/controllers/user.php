<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends MY_AppController {	
	function __construct() {
    	parent::__construct();

	}	

	/*public function index(){
		$this->data['view_file']  = 'user/index';
		$this->load->view('layouts/user_default', $this->data); 
	}	
	*/

	public function notfound()
	{
	}
	public function index()
	{
		$this->data['titlehome']=='Business Directory: B2B Marketing, Exporters Trade India';
		$this->data['userCategorySubCategory'] = $this->common->popularCategorySubCategoryList();
		$this->data['LeadsData']= $this->common->BuyleadList();
		$this->data['view_file'] = 'user/index';
		$this->load->view('layouts/testDefault', $this->data); 
	}

	public function enquiry()
	{
		if($this->input->post('submitEnquiry'))
		{
			//pr($this->input->post());
			$this->enquriysubmit();
	    }		

		$this->data['view_file']  = 'user/enqirey';
		$this->load->view('layouts/second_default', $this->data); 
	}

	public function profile(){
		$this->data['view_file']  = 'user/profile';
		$this->load->view('layouts/profile_default', $this->data); 
	}
	public function useraccount($profilrpart=false)

	{
		if($this->session->userdata('UserId')=='')
		{
			redirect(SITE_URL.'user/index');
		}
		$this->data['type']=$profilrpart;
		$this->data['userId']=$this->session->userdata('UserId');
		$userId=$this->session->userdata('UserId');
		if($profilrpart=='contactProfile')
		{
				if($this->input->post('updateuser'))
				{
					//pr($this->input->post());
					$this->updateprofile();
				}
			
		$this->data['view_file']  = 'profile/mycontectdetails';
		}

		if($profilrpart=='inbox')
		{
		$this->data['view_file']  = 'profile/inbox';
		}
		if($profilrpart=='sentbox')
		{
		$this->data['view_file']  = 'profile/sentbox';
		}
		if($profilrpart=='trash')
		{
		$this->data['view_file']  = 'profile/trash';
		}
		if($profilrpart=='junk')
		{
		$this->data['view_file']  = 'profile/junk';
		}
		if($profilrpart=='manegeProducts')
		{
			if($this->input->post('submit'))
		{
			//pr($this->input->post());
			$this->updatemanageproduct();
		}

		$this->data['view_file']  = 'profile/manageProducts';
		}
		if($profilrpart=='myabout')
		{
		$this->data['view_file']  = 'profile/myabout';
		}
		if($profilrpart=='myhome')
		{
		$this->data['view_file']  = 'profile/myhome';
		}
		if($profilrpart=='mybussiness')
		{
			if($this->input->post('submitLeadUpdate'))
		{
			//pr($this->input->post());
			$this->addserviceupdate();
		}
		if($this->input->post('SAVELead'))
		{
			$this->addservice();
		}
		$this->data['view_file']  = 'profile/mybussiness';
		}
		if($profilrpart=='myawards')
		{
	    	$this->data['view_file']  = 'profile/myawards';
		}
		if($profilrpart=='myquailty')
		{
		  $this->data['view_file']  = 'profile/myquality';
		}
		if($profilrpart=='myinfrastructure')
		{
		   $this->data['view_file']  = 'profile/myinfrastracture';
		}
		if($profilrpart=='mycustom')
		{
		    $this->data['view_file']  = 'profile/mycustom';
		}
		if($profilrpart=='addnewproduct')
		{
		    $this->data['view_file']  = 'profile/mynewproduct';
		}
		if($profilrpart=='mytest')
		{
		    $this->data['view_file']  = 'profile/mytest';
		}
		if($profilrpart=='mynews')
		{
		    $this->data['view_file']  = 'profile/mynews';
		}
		if($profilrpart=='myrequirment')
		{
		    $this->data['view_file']  = 'profile/myrequirment';
		}	
		if($profilrpart=='newssubscription')
		{
		    $this->data['view_file']  = 'profile/newssubcription';
		}	
		if($profilrpart=='passwordchange')
		{
		    $this->data['view_file']  = 'profile/passwordchange';
		}	
		if($profilrpart=='mybuyleads')
		{
			$this->data['view_file']  = 'profile/mybuyleads';
		}
		if($profilrpart=='myprefrence')
		{
			$this->data['view_file']  = 'profile/myprefrence';
		}
		if($profilrpart=='manegeusedproduct')
		{
			if($this->input->post('updateproduct'))
			{
		   

			}
			$userId=$this->session->userdata('UserId');
			$condition=array("user_id"=>$userId);
			$this->data['DataListing'] = $this->common->popularusedProducts($condition,false);
			$this->data['sellcategory'] =$this->common->sellproductcategory();
			$this->data['stateData'] = $this->common->CityList(false);
			$this->data['view_file']  = 'profile/manegeusedproduct';
		}
		$this->load->view('layouts/second_default', $this->data);
	}

	public function mycatalog($profilrpart=false,$type1=false,$type2=false)
	{
		$this->data['headtype']= $profilrpart;
		if($profilrpart=='home')
		{
		$this->data['companyName']= $type1;
		$this->data['comnayID']= $type2;
		$this->data['view_file']  = 'profile/mycatalog';
		}
		if($profilrpart=='about')
		{
		$this->data['companyName']= $type1;
		$this->data['comnayID']= $type2;
		$this->data['view_file']  = 'profile/catalogabout';
		}
		if($profilrpart=='product')
		{
		$this->data['companyName']= $type1;
		$this->data['comnayID']= $type2;
		$this->data['view_file']  = 'profile/ctalogproduct';
		}

		if($profilrpart=='contect')
		{

		$this->data['companyName']= $type1;
		$this->data['comnayID']= $type2;
		$this->data['view_file']  = 'profile/ctalogcontect';
		}
		if($profilrpart=='enquiry')
		{
		$this->data['companyName']= $type1;
		$this->data['comnayID']= $type2;
		$this->data['view_file']  = 'profile/ctalogenquiry';
		}
		$this->load->view('layouts/catalogdefault.php', $this->data);
	}


	public function updateContectDetails()
	{
		 $userData = $this->input->post();
		 $this->db->trans_begin();
		 $image=$_FILES['UPDATELOGO']['name'];
		 //echo $image;
		          if($image!='')
				  {
					 //  echo "pawan DALALA";
		               $name=$image;
				       $up_path= 'Document';
				       $input_name='UPDATELOGO';
				       $image_name=$this->upload_image($up_path,$input_name,$name);
			      }						 
			      else
			      {
					   //echo "pawan DALALADSSGF";
					  $this->load->model('common');
					  $userId=$this->session->userdata('UserId');
                      $condition=array("user_id"=>$userId);
					  $usercompanyDetails=$this->common->companyDetails($condition);
			          $image_name=$usercompanyDetails->copmnay_logo;
			      }
		$contectUpdateData= array("company_name"=>$userData['company_name'],

		                          "contect_person"=>$userData['contectfirst'].' '.$userData['contectlast'],
								  "Designation"=>$userData['Designation'],
								  "pincode"=>$userData['pincode'],
								  "phone_no"=>$userData['Telephonecodecountry'].'-'.$userData['Telephonecode'].'-'.$userData['Telephone'],
								  "phone_no1"=>$userData['Telephoneanothercodecountry'].'-'.$userData['Telephoneanothercode'].'-'.$userData['Telephoneanother'],
								  "fax_no"=>$userData['countryfaxcocde'].'-'.$userData['Faxcode'].'-'.$userData['Faxno'],
								  "mobile_no1"=>$userData['Mobileanother'],
								  "address"=>$userData['address'],
								  "state"=>$userData['state'],
								  "distric"=>$userData['city'],
								  "copmnay_logo"=>$image_name,
								  "alternative_email_id1"=>$userData['AlternateEmail'],
								  "website"=>$userData['AlternateWebsite']);
								  $this->load->model('ContectUpdate');
								  $where=array("company_id"=>$userData['company_id']);
								  $Update = $this->ContectUpdate->updateDetails($where,'company_details',$contectUpdateData);
								 if ($this->db->trans_status() === FALSE)
								 {
										$this->db->trans_rollback();
								 }
								 else
								 {
									 $this->db->trans_commit();
									 $this->data['view_file']  = 'profile/mycontectdetails';
   									 $this->load->view('layouts/second_default', $this->data);
								}
	}
	
	public function updateprofile()

	

	{

		 $userData = $this->input->post();

		 @extract($userData);

		 $this->db->trans_begin();

		 $image=$_FILES['UPDATELOGO']['name'];

		 //echo $image;

		          if($image!='')

				  {

		               $name=$image;

				       $up_path= 'Document';

				       $input_name='UPDATELOGO';

				       $image_name=$this->upload_image($up_path,$input_name,$name);

			      }						 

			      else

			      {

					  $this->load->model('common');

					  $userId=$this->session->userdata('UserId');

                      $condition=array("user_id"=>$userId);

					  $usercompanyDetails=$this->common->companyDetails($condition);

			          $image_name=$usercompanyDetails->copmnay_logo;

			      }

		$contectUpdateData= array("profile_name"=>$profle_name,

									"mobile_no"=>$mobile_no,

									"permanent_address"=>$userAddress,

									"profile_image"=>$image_name);

									

									$this->load->model('ContectUpdate');

									$where=array("id"=>$this->session->userdata('UserId'));

									$Update = $this->ContectUpdate->updateDetails($where,'user_signup',$contectUpdateData);

									 if ($this->db->trans_status() === FALSE)

									{

									   $this->db->trans_rollback();

									}

									else

									{

										$this->db->trans_commit();

									}

	}

	

	public function homecontent()

	

	{

		      $userData = $this->input->post();

		      $this->db->trans_begin();

		      $this->form_validation->set_rules('keydescription', 'Description', 'required');

			  $this->form_validation->set_rules('description', 'Description', 'required');

			 // $this->form_validation->set_rules('email', 'Email', 'required|valid_email|callback__isUniqueEmail['.$id.']');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

             if ($this->form_validation->run())

			 {

				 $this->load->model('ContectUpdate');

		

	              	 $where=array("company_id"=>$userData['company_id']);

		             $checkExit = $this->db->where($where)

				          ->get('company_bussiness_details');

						  if($checkExit ->num_rows()>0)

						  {

							  $contectUpdateData= array("key_description"=>$userData['keydescription'],"home_content"=>$userData['description']);

		                      $Update = $this->ContectUpdate->updateDetails($where,'home_content',$contectUpdateData);

						  }

						  else

						  {

							  $InsertData= array($where,"key_description"=>$userData['keydescription'],"home_content"=>$userData['description']);

							  $Update = $this->ContectUpdate->insertData('home_content',$InsertData);

						  }

						 if ($this->db->trans_status() === FALSE)

								{

									$this->db->trans_rollback();

								}

								else

								{

									$this->db->trans_commit();

									$this->data['view_file']  = 'profile/myhome';

									$this->load->view('layouts/second_default', $this->data);

								}

							 }

							 else

							 {

									$this->data['view_file']  = 'profile/myhome';

									$this->load->view('layouts/second_default', $this->data);

								 

							 }	

	}

	

	public function companybussinessUpdate()

	

	{

		   $userData = $this->input->post();

		   $this->db->trans_begin();

		   $where=array("company_id"=>$userData['company_id']);

		   $image=$_FILES['logo']['name'];

		          if($image!="")

				  {

					  

		               $name=$image;

				       $up_path= 'Document';

				       $input_name='logo';

				       $image_name=$this->upload_image($up_path,$input_name,$name);

			      }						 

			      else

			      {

				      $this->load->model('common');

				      $companyDetails = $this->common->companyDetails($where);

			          $image_name=$companyDetails->copmnay_logo;

			      }

				  

		         $contectUpdateData= array("website"=>$userData['website'],

				                           "copmnay_logo"=>$image_name);

		         $this->load->model('ContectUpdate');

		         $Update = $this->ContectUpdate->updateDetails($where,'company_details',$contectUpdateData);

				 $checkExit = $this->db->where($where)

				          ->get('company_bussiness_details');

						  if($checkExit ->num_rows()>0)

						  {

							  $update=array("employess"=>$userData['Employees'],

							                "tarnover"=>$userData['Turnover'],

											"year_of_start"=>$userData['establish'],

											"ownership"=>$userData['Ownership']);

							  $Update = $this->ContectUpdate->updateDetails($where,'company_bussiness_details',$update);

							 // echo $this->db->last_query();

						  }

						  else

						  {

							  $insertData = array("company_id"=>$userData['company_id'],

							                      "employess"=>$userData['Employees'],

												  "tarnover"=>$userData['Turnover'],

												  "year_of_start"=>$userData['establish'],

												  "ownership"=>$userData['Ownership']);

							        $inserDtaDetails = $this->ContectUpdate->insertData('company_bussiness_details',$insertData);

						  }

									 if ($this->db->trans_status() === FALSE)

									

									 {

										

										  $this->db->trans_rollback();

									 }

									

									else

									

									{

										 $this->db->trans_commit();

										 $this->data['view_file']  = 'profile/mybussiness';

										 $this->load->view('layouts/catalogdefault.php', $this->data);

									 }

	}	

	

	public function companyregistrationUpdate()

	

	{

		   $userData = $this->input->post();

		   $this->db->trans_begin();

		   $where= array("company_id"=>$userData['company_id']);

		   $this->load->model('ContectUpdate');

           $checkExit = $this->db->where($where)

				          ->get('company_bussiness_details');

						  if($checkExit ->num_rows()>0)

						  {

							  $update = array("RegistrationNo"=>$userData['Registration_no'],                                              "RegistrationAuthority"=>$userData['RegistrationAuthority'],

											  "CINNo"=>$userData['CIN'],

											  "TANNo"=>$userData['TAN'],

											  "PANNo"=>$userData['PAN'],

											  "ServiceTaxNo"=>$userData['ServiceTax'],

											  "ExciseRegNo"=>$userData['ExciseReg'],

											  "TIN_VATNo"=>$userData['TINVAT'],

											  "DGFTCode"=>$userData['DGFTCode']);

							  $Update = $this->ContectUpdate->updateDetails($where,'company_bussiness_details',$update);

							 // echo $this->db->last_query();

						  }

						  else

						  {

							  $insertData = array("company_id"=>$userData['company_id'],

							                      "RegistrationNo"=>$userData['Registration_no'],                                                  "RegistrationAuthority"=>$userData['RegistrationAuthority'],

												  "CINNo"=>$userData['CIN'],

												  "TANNo"=>$userData['TAN'],

												  "PANNo"=>$userData['PAN'],

												  "ServiceTaxNo"=>$userData['ServiceTax'],

												  "ExciseRegNo"=>$userData['ExciseReg'],

												  "TIN_VATNo"=>$userData['TINVAT'],

												  "DGFTCode"=>$userData['DGFTCode']);

							                      $inserDtaDetails = $this->ContectUpdate->insertData('company_bussiness_details',$insertData);

						  }

										 if ($this->db->trans_status() === FALSE)

										

										 {

											

											  $this->db->trans_rollback();

										 }

										

										else

										

										{

											 $this->db->trans_commit();

											 $this->data['view_file']  = 'profile/mybussiness';

											 $this->load->view('layouts/catalogdefault.php', $this->data);

										 }

	}	

	

	public function ctalogFeatures()

	{

	      	  $userData = $this->input->post();

		      $this->db->trans_begin();

			  $this->form_validation->set_rules('description', 'Description', 'required');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

             if ($this->form_validation->run())

			 {

		   $where=array("company_id"=>$userData['company_id']);

		   $image=$_FILES['logo']['name'];

		          if($image!="")

				  {

		               $name=$image;

				       $up_path= 'Document';

				       $input_name='logo';

				       $image_name=$this->upload_image($up_path,$input_name,$name);

			      }						 

			      else

			      {

			          $image_name="";

			      }

				  $this->load->model('ContectUpdate');

				   $insertData = array("company_id"=>$userData['company_id'],

									   "feature_title"=>$userData['heading'],

									   "feature_description"=>$userData['description'],

									   "feature_for"=>"profile",

									   "display_image"=>$image_name,

									   "date"=>date('Y-m-d'));

									   $inserDtaDetails = $this->ContectUpdate->insertData('site_features',$insertData);

									   //echo $this->db->last_query();

											  

									 if ($this->db->trans_status() === FALSE)

									 {

										  $this->db->trans_rollback();

									 }

									else

									{

										 $this->db->trans_commit();

										 $this->data['view_file']  = 'profile/myabout';

										 $this->load->view('layouts/catalogdefault.php', $this->data);

									 }

			 }

				 else

				 {

					 $this->data['view_file']  = 'profile/myabout';

                     $this->load->view('layouts/catalogdefault.php', $this->data);

				 }

	}

	public function ctalogFeaturesupdate()

	{

	      	  $userData = $this->input->post();

			  //pr($userData);

		      $this->db->trans_begin();

			  $this->form_validation->set_rules('descriptionupdate', 'Description', 'required');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

             if ($this->form_validation->run())

			 {

		   $where=array("company_id"=>$userData['company_id']);

		   $condition=array("feature_id"=>$userData['featureid']);

		   $image=$_FILES['logo']['name'];

		          if($image!="")

				  {

		               $name=$image;

				       $up_path= 'Document';

				       $input_name='logo';

				       $image_name=$this->upload_image($up_path,$input_name,$name);

			      }						 

			      else

			      {

					  

			          $companyDisplayContent=$this->common->updateSiteFetaureimage($condition);

			          $image_name=$companyDisplayContent->display_image;

			      }

				  $this->load->model('ContectUpdate');

				   $updateData = array("feature_title"=>$userData['heading'],

									   "feature_description"=>$userData['descriptionupdate'],

									   "feature_for"=>"profile",

									   "display_image"=>$image_name,

									   "date"=>date('Y-m-d'));

				   $inserDtaDetails = $this->ContectUpdate->updateDetails($condition,'site_features',$updateData);

				   

						  

							 if ($this->db->trans_status() === FALSE)

							 {

								  $this->db->trans_rollback();

							 }

							else

							{

								 $this->db->trans_commit();

								 $this->data['view_file']  = 'profile/myabout';

								 $this->load->view('layouts/catalogdefault.php', $this->data);

							 }

						 }

							 else

							 {

								 $this->data['view_file']  = 'profile/myabout';

								 $this->load->view('layouts/catalogdefault.php', $this->data);

							 }

	}

	

	  

		  

		   public function addproduct()

	 {

		      $userData = $this->input->post();

			  if($this->session->userdata('logged_in')== true)

			  {

			  $image=$_FILES['logo']['name'];

			  $this->form_validation->set_rules('product_description', 'Description', 'required');

			 // $this->form_validation->set_rules('email', 'Email', 'required|valid_email|callback__isUniqueEmail['.$id.']');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

			  

             if ($this->form_validation->run())

			 {

				  

			  if($image!=""){

		        $name=$image;

				$up_path= 'Document';

				$input_name='logo';

				$image_name=$this->upload_image($up_path,$input_name,$name);

			   }

			   else

			   {

			    $image_name='';

			   }

			   $this->load->model('ContectUpdate');

		   $productData = array('company_id' => $userData['company_id'],

							    'bussiness_nature'=> $userData['product_name'],

							    'wesite'=>$userData['website'],

							    'category'=>$userData['categorylist'],

							    'sub_category'=>$userData['subcategory'],

							    'discription'=>$userData['product_description'],

							    'product_image'=>$image_name);

								$Insert = $this->ContectUpdate->insertData('product_details',$productData);

								$this->data['view_file']  = 'profile/mynewproduct';

								$this->load->view('layouts/second_default', $this->data);

		

								  }

								  else

								   {

										$this->data['view_file']  = 'profile/mynewproduct';

										$this->load->view('layouts/second_default', $this->data);

								   }

								  }

	 }

	    public function updatemanageproduct()

	 {

		      $userData = $this->input->post();

			  if($this->session->userdata('logged_in')== true)

			  {

			  $image=$_FILES['logo']['name'];

			  $this->form_validation->set_rules('product_description', 'Description', 'required');

			  $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

			  $condition=array("product_id"=>$userData['product_id']);

             if ($this->form_validation->run())

			 {

				  

			  if($image!=""){

		        $name=$image;

				$up_path= 'Document';

				$input_name='logo';

				$image_name = $this->upload_image($up_path,$input_name,$name);

			   }

			   else

			   {

				   $this->load->model('common');

				   $productDetails=$this->common->ViewProductDetails(false,$userData['product_id']);

				 //  echo $this->db->last_query();

			       $image_name=$productDetails->product_image;

			   }

			   $this->load->model('ContectUpdate');

			   

		   $productData = array('company_id' => $userData['company_id'],

							    'bussiness_nature'=> $userData['product_name'],

							    'wesite'=>$userData['website'],

							    'category'=>$userData['categorylist'],

							    'sub_category'=>$userData['subcategory'],

							    'discription'=>$userData['product_description'],

							    'product_image'=>$image_name);

		  $Insert = $this->ContectUpdate->updateDetails($condition,'product_details',$productData);

				  }

			  }

	 }

	 public function addtest()

	 {

		      $userData = $this->input->post();

			  if($this->session->userdata('logged_in')== true)

			  {

			  $image=$_FILES['logo']['name'];

			  $this->form_validation->set_rules('description', 'Description', 'required');

			//  $this->form_validation->set_rules('mobile', 'Mobile Number', 'required');

			  $this->form_validation->set_rules('title', 'Title ', 'required');

			 			 // $this->form_validation->set_rules('email', 'Email', 'required|valid_email|callback__isUniqueEmail['.$id.']');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

             if ($this->form_validation->run())

			 {

				  

			  if($image!=""){

		        $name=$image;

				$up_path= 'Document';

				$input_name='logo';

				$image_name=$this->upload_image($up_path,$input_name,$name);

			   }

			   else

			   {

			    $image_name='';

			   }

			   $this->load->model('ContectUpdate');

		   $productData = array('company_id' => $userData['company_id'],

		                        'test_given_by'=>$userData['test_given_by'],

								'sender_email'=> $userData['email_sender'],

								'address'=>$userData['Address'],

								'title'=>$userData['title'],

								'description'=>$userData['description'],

								'image'=>$image_name,

								'date'=>date('Y-m-d h:i:s'));

								$Insert = $this->ContectUpdate->insertData('testomonial',$productData);

								$this->data['view_file']  = 'profile/mytest';

								$this->load->view('layouts/second_default', $this->data);



							  }

							  else

							   {

									$this->data['view_file']  = 'profile/mytest';

									$this->load->view('layouts/second_default', $this->data);	

							   }

			  }

	 }

	 

	  public function addnews()

	 {

		      $userData = $this->input->post();

			  if($this->session->userdata('logged_in')== true)

			  {

			  $image=$_FILES['logo']['name'];

			  $this->form_validation->set_rules('description', 'Description', 'required');

			  $this->form_validation->set_rules('news_title', 'Title ', 'required');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

             if ($this->form_validation->run())

			 {

				  

			  if($image!=""){

		        $name=$image;

				$up_path= 'Document';

				$input_name='logo';

				$image_name=$this->upload_image($up_path,$input_name,$name);

			   }

			   else

			   {

			    $image_name='';

			   }

			   $this->load->model('ContectUpdate');

		       $productData = array('company_id' => $userData['company_id'],

								    'news_title'=>$userData['news_title'],

								    'Media_Type'=> $userData['media'],

								    'nesw_description'=>$userData['description'],

								    'news_logo'=>$image_name,

								    'date'=>date('Y-m-d h:i:s'));

		                            $Insert = $this->ContectUpdate->insertData('news_display',$productData);

									$this->data['view_file']  = 'profile/mynews';

									$this->load->view('layouts/second_default', $this->data);



			  }

								  else

								   {

										$this->data['view_file']  = 'profile/mynews';

										$this->load->view('layouts/second_default', $this->data);

								   }

			  }

	 }

	 

	  public function updatetest()

	 {

		      $userData = $this->input->post();

			  $userId=$this->session->userdata('UserId');

              $condition=array("user_id"=>$userId);

			  if($this->session->userdata('logged_in')== true)

			  {

			  $image=$_FILES['logo']['name'];

			  $this->form_validation->set_rules('description', 'Description', 'required');

			  $this->form_validation->set_rules('title', 'Title ', 'required');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

             if ($this->form_validation->run())

			 {

				  

			  if($image!=""){

		        $name=$image;

				$up_path= 'Document';

				$input_name='logo';

				$image_name=$this->upload_image($up_path,$input_name,$name);

			   }

			   else

			   {

				   $companyDisplayContent=$this->common->companyDataDisplayTetmonial($condition);

			       $image_name=$companyDisplayContent->image;

			   }

			   $this->load->model('ContectUpdate');

			   $where=array("company_id"=>$userData['company_id']);

			   $productData = array('test_given_by'=>$userData['test_given_by'],

								    'sender_email'=> $userData['email_sender'],

								    'address'=>$userData['Address'],

								    'title'=>$userData['title'],

								    'description'=>$userData['description'],

								    'image'=>$image_name,

								    'date'=>date('Y-m-d h:i:s'));

				  $Insert = $this->ContectUpdate->updateDetails($where,'testomonial',$productData);

				  $this->data['view_file']  = 'profile/mytest';

				  $this->load->view('layouts/second_default', $this->data);

				  }

					  else

					   {

							$this->data['view_file']  = 'profile/mytest';

							$this->load->view('layouts/second_default', $this->data);

					   }

			  }

	 }

	   public function updatenews()

	 {

		      $userData = $this->input->post();

			  $userId=$this->session->userdata('UserId');

              $condition=array("user_id"=>$userId);

			  if($this->session->userdata('logged_in')== true)

			  {

			  $image=$_FILES['logo']['name'];

			  $this->form_validation->set_rules('description', 'Description', 'required');

			  $this->form_validation->set_rules('title', 'Title ', 'required');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

             if ($this->form_validation->run())

			 {

				  

			  if($image!=""){

		        $name=$image;

				$up_path= 'Document';

				$input_name='logo';

				$image_name=$this->upload_image($up_path,$input_name,$name);

			   }

			   else

			   {

				   $companyDisplayContent=$this->common->companyDataDisplayNewsDetails($condition);

			       $image_name=$companyDisplayContent->news_logo;

			   }

			   $this->load->model('ContectUpdate');

			   $where=array("company_id"=>$userData['company_id']);

			   $productData = array('news_title'=>$userData['title'],

								    'Media_Type'=> $userData['media'],

								    'nesw_description'=>$userData['description'],

								    'news_logo'=>$image_name,

								    'date'=>date('Y-m-d h:i:s'));

									   $update = $this->ContectUpdate->updateDetails($where,'news_display',$productData);

									   $this->data['view_file']  = 'profile/mynews';

									   $this->load->view('layouts/second_default', $this->data);

		      

			     }

			   else

			   {

		        $this->data['view_file']  = 'profile/mynews';

		        $this->load->view('layouts/second_default', $this->data);

			      }

			   }

	   }

	    public function addserviceupdate()

	 {

		      $userData = $this->input->post();

			  @extract($userData);

			  $userId=$this->session->userdata('UserId');

              $condition=array("user_id"=>$userId);

			  if($this->session->userdata('logged_in')== true)

			  {

			  $this->form_validation->set_rules('description', 'Description', 'required');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

             if ($this->form_validation->run())

			 {

				 if($catid=='' || $subcat='')

				 {

					 $DetailsDta= $this->common->ViewLeadProductDetails(false,$lead_id);

					 $CatId=$DetailsDta->category;

					 $subCatId=$DetailsDta->subcategory;

				 }

				 else

				 {

					 $CatId=$catid;

					 $subCatId=$subcat;

				 }

			   $this->load->model('ContectUpdate');

			   $where=array("lead_id"=>$lead_id);

			   $productData = array('product_name'=>$productservice,

									   'requirment'=> $description,

									   'quantity'=>$Quantity.'-'.$Units,

									   'company_id'=>$company_id,"category"=>$CatId,

									   "subcategory"=>$subCatId,

									   'requirment_frequency'=>$RequirementFrequency,

									   'cost_estimated'=>$ordervalue.'-'.$currency,

									   'date'=>date('Y-m-d h:i:s'));

		       $update = $this->ContectUpdate->updateDetails($where,'buy_leads',$productData);

			  			     }

			   

			   }

	   }

	 

	 

		  

		  

		  public function addservice()

		  {

			  $userData = $this->input->post();

			  @extract($userData);

			  $this->form_validation->set_rules('description', 'Description', 'required');

			  $this->form_validation->set_rules('productservice', 'Product Service ', 'required');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

			   if ($this->form_validation->run())

			 {

		

			   $this->load->model('ContectUpdate');

			   $productData = array("company_id"=>$company_id,

											   'product_name'=>$productservice,

											   'requirment'=> $description,

											   'quantity'=>$Quantity.'-'.$Units,

											   'category'=>$catid,

											   'subcategory'=>$subcat,

											   'cost_estimated'=>$ordervalue.'-'.$currency,

											   'requirment_frequency'=>$RequirementFrequency,

											   'date'=>date('Y-m-d h:i:s'));

		  $Insert = $this->ContectUpdate->insertData('buy_leads',$productData);

		 

			  }

			 

		  }

		   public function addreply()

	

	    {

		if($this->session->userdata('logged_in')== true)

			  {

			  $userData = $this->input->post();

			  $image=$_FILES['logo']['name'];

			  $this->form_validation->set_rules('messagereply', 'Description', 'required');

              $this->form_validation->set_error_delimiters('<p class="req">', '</p>');

             if ($this->form_validation->run())

			 {

		          if($image!="")

				  {

		               $name=$image;

				       $up_path= 'Document';

				       $input_name='file';

				       $image_name=$this->upload_image($up_path,$input_name,$name);

			      }						 

			      else

			      {

			          $image_name='';

			      }

		                      $this->load->model('ContectUpdate');

							  $insertData = array("enquiry_id"=>$userData['enquiry_id'],"reply_message"=>$userData['messagereply'],"attach_file"=>$image_name,"reply_date"=>date('Y-m-d h:i:s'));

							  $inserDtaDetails = $this->ContectUpdate->insertData('user_reply',$insertData);

							  $conditionForUpdate= array("id"=>$userData['enquiry_id']);

							  $updatestatusData= array("status"=>'sentreply');

							  $updateStatus = $this->ContectUpdate->updateDetails($conditionForUpdate,'products_enqiry',$updatestatusData);

						  

		         if ($this->db->trans_status() === FALSE)

                 {

                      $this->db->trans_rollback();

                 }

                else

				

                {

                     $this->db->trans_commit();

                     redirect(SITE_URL.'user/useraccount/inbox');

                 }

			 }

			 else

			 {

				 $this->data['view_file']  = 'profile/inbox';

	           	$this->load->view('layouts/second_default', $this->data);

				 

			 }

	}

	}

	

					

			  public function enquriysubmit()

					 {

  $stateNameData=$this->common->stateDisplayName($stateId);

			  		  $districtNameData=$this->common->districtDisplayName($SubCategoryDataList->distric);	

					  $userData = $this->input->post();

					  @extract($userData);

			          $this->load->model('ContectUpdate');

					  $productData = array('contact_person' => $userData['contect_person'],

					  'email' => $email,

					  'company_name'=> $companyname,

					  'website'=>$website,

					  'state'=>$state,

					  'city'=>$districList,

					  'desc_req'=>$requirment,

					  'enq_date_time'=>date('Y-m-d h:i:s'));

					  $Insert = $this->ContectUpdate->insertData('enquiry',$productData);

					  $to=$email;

				      $from='no-reply@indiabiztrade.com';

				      $subject='Thanks For Enquiry';

				      $body='welcome you we are happy with you';

				      $sendemail=$this->common->sendemail($to,$from,$subject,$body);

					  //echo $this->db->last_query();

					  $this->data['succ_msg'] = 'We will communicate you as soon as possible.';

					  

					

					}

   public function updateusedproduct()

	 {

		      $userData = $this->input->post();

			  if($this->session->userdata('logged_in')== true)

			  {

			  $image=$_FILES['logo']['name'];

			  $this->db->trans_begin();

			  $this->form_validation->set_rules('title', 'Title', 'required');

			  $this->form_validation->set_rules('product_description', 'Description', 'required');

			  $this->form_validation->set_rules('Address', 'Address', 'required');

			  $condition=array("product_id"=>$userData['product_id']);

              if ($this->form_validation->run())

			 {

				  

			  if($image!=""){

		        $name=$image;

				$up_path= 'Document';

				$input_name='logo';

				$image_name = $this->upload_image($up_path,$input_name,$name);

			   }

			   else

			   {

				   $this->load->model('common');

				   $productDetails=$this->common->ViewProductDetails(false,$userData['product_id']);

			       $image_name=$productDetails->product_image;

			   }

			    $this->load->model('ContectUpdate');

		  	    $image=array_filter($_FILES['fileField']['name']);

	         	$this->load->model('User');

			    $sellCatId = $userData['categorylistsell'];

				$sellConditionArray = array('18','19');

				if(!in_array($sellCatId,$sellConditionArray )){

		           $productData = array('user_id' => $this->session->userdata('UserId'),

										   'title' => $title,

										   'contect_person'=> $this->session->userdata('DisplayName'),

										   'price'=>$price,

										   'product_description'=>$product_description,

										   'state'=>$state,

										   'district'=>$districList,

										   'city'=>$CityList,

										   'sellertype'=>$radio,

										   'address'=>$Address,

										   'category'=>$categorylistsell,

										   'subcategory'=>$subcategorysell,

										   'brand_id'=>$productbrand,

										   "date"=>date('Y-m-d h:i:s'));

		  			}elseif($sellCatId=='18'){



				       $productData = array('user_id' => $this->session->userdata('UserId'),



											'title' => $title,



											'position'=>$radio,



											'experience'=>$expyear,



											'brand_id'=>$jobtype,



											'price'=>$Sallery,



											'salary_type'=>$Sallerytype.'-'.$expMonth,



											'product_description'=>$product_description,



											'category'=>$categorylistsell,



											'subcategory'=>$subcategorysell,



											'contect_person'=> $this->session->userdata('DisplayName'),



											'state'=>$state,



											'district'=>$districList,



											'city'=>$CityList,



											"date"=>date('Y-m-d h:i:s'));



					 }else{



						 



				       $productData = array('user_id' => $this->session->userdata('UserId'),



											'title' => $title,



											'furnished'=>$Furnished,



											'Bedrooms'=>$Bedrooms,



											'Bathrooms'=>$Bathrooms,



											'price'=>$Price,



											'broker_free'=>$Broker,



											'area'=>$Area,



											'product_description'=>$product_description,



											'category'=>$categorylistsell,



											'subcategory'=>$subcategorysell,

											'contect_person'=> $this->session->userdata('DisplayName'),

											'state'=>$state,

											'district'=>$districList,

											'city'=>$CityList,

											"date"=>date('Y-m-d h:i:s'));







			}

		  $Insert = $this->ContectUpdate->updateDetails($condition,'product_details',$productData);

				  }

			  }

	 }

				

}


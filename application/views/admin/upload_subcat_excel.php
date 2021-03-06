<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h3 class="modal-title">Upload Sub Category</h3>
      </div>
      <div class="modal-body">
    
     
         <form action="<?php echo SITE_URL.'admin/addexcel';?>" method="post" id="uploadexcel" enctype="multipart/form-data" class="form-horizontal form-bordered">
        <div class="form-group">
          <label class="col-md-3 control-label" for="example-text-input">Category <span class="err">*</span></label>
          <div class="col-md-9">
            <select name="cat" id="cat" class="form-control validate[required]">
            
              <option value="">--select--</option>
              <?php if(isset($rows)){
			
              foreach($rows as $cat){?>
              <option value="<?php echo $cat->cat_id;?>"><?php echo $cat->category;?></option>
              <?php } }?>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label" for="example-file-input">Excel File <span class="err">*</span></label>
          <div class="col-md-9">
            <input type="file" id="excelfile" name="excelfile" class="validate[required]"  />
          </div>
        </div>
        <div class="modal-footer">
          <div class="form-group form-actions">
            <div class="col-md-9 col-md-offset-3">
              <input type="submit" id="submit" class="btn btn-sm btn-primary" name="submit"  value="Import"/>
              <input type="reset" id="reset" class="btn btn-sm btn-warning" name="reset"  value="Reset"/>
              <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
        </form>
        
      
      </div>
    </div>
  </div>
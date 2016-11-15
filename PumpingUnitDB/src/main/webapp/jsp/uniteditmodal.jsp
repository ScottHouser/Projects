<!-- Edit Modal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog"
     aria-labelledby="detailsModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="detailsModalLabel">Edit Unit</h4>
            </div>
            <div class="modal-body">
                <h3 id="unit-id-edit"></h3>
                
                <form class="form-horizontal" role="form">
                    <input type="text" id="unit-id-editt" style="display:none;"/>
                    <div class="form-group">
                        <label for="edit-make" class="col-md-4 control-label">
                            Make:
                        </label>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="edit-make"
                                   placeholder="Make">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit-model" class="col-md-4 control-label">
                            Model:
                        </label>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="edit-model"
                                   placeholder="Model">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit-size" class="col-md-4 control-label">
                            Size:
                        </label>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="edit-size"
                                   placeholder="Size">
                        </div>
                    </div>
                  
                    <div class="form-group">
                        <label for="edit-serial" class="col-md-4 control-label">
                            Serial#:
                        </label>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="edit-serial"
                                   placeholder="Serial#">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit-weights" class="col-md-4 control-label">
                            Weights:
                        </label>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="edit-weights"
                                   placeholder="Weights">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit-notes" class="col-md-4 control-label">
                            Notes:
                        </label>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="edit-notes"
                                   placeholder="Notes">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-offset-4 col-md-8">
                            <button type="submit" id="edit-button" class="btn btn-default"
                                    data-dismiss="modal">
                                Edit Unit
                            </button>
                            <button type="button" class="btn btn-default"
                                    data-dismiss="modal">
                                Cancel
                            </button>
                            <input type="hidden" id="edit-unit-id">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
function deleteCityForm(id) {
    $.ajax({
        url: 'http://localhost:8080/city/' + id,
        type: 'GET',
        success: function (data) {
            let message = 'Are you sure you want to delete this city?';
            let content = getInfo(message, data);
            $('#show-form-create').html(content);
            $('#modal-footer').html(`
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Quit</button>
<button type="button" class="btn btn-danger" onclick="deleteCity(${id})" >Delete</button>`)
        }
    });
}

function deleteCity(id) {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:8080/city/' + id,
        success: function () {
            let message = 'Delete successful';
            $("#show-form-create").html(messageSuccess(message));
            showAllCity();
        }
    })
}

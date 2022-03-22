function editCityForm(id) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/city/' + id,
        success: function (data) {
            showAllNational();
            let messageCreate = `Edit`
            let content = contentModal(messageCreate);
            content += `<div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Quit</button>
            <button type="button" class="btn btn-primary" id="submit" onclick="updateCity(${id})" >Edit</button>
        </div>`
            $("#show-form-create").html(content);
            $('#name').val(data.name);
            $('#area').val(data.area);
            $('#population').val(data.population);
            $('#gdp').val(data.gdp);
            $('#description').val(data.description);
        }
    })
}

function updateCity(id) {
    let name = $('#name').val();
    let national = $('#national').val();
    let area = $('#area').val();
    let population = $('#population').val();
    let gdp = $('#gdp').val();
    let description = $('#description').val();
    let city = {
        id: id,
        name: name,
        national: {
            id: national
        },
        area: area,
        population: population,
        gdp: gdp,
        description: description
    }
    $.ajax({
        type: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: 'http://localhost:8080/city/' + id,
        data: JSON.stringify(city),
        contentType: 'application/json',
        success: function (data) {
            let message = `Edit successfully`;
            $('#show-form-create').html(messageSuccess(message));
            showAllCity();
        }
    })
}
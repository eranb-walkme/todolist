function init()
{
    bindEnter();
    refreshData();
}

function bindEnter()
{
    $('#label').keydown(function(e)
    {
        if(e.which == 13)
        {
            createTaskFromUi();
        }
    });
}


function createTaskFromUi()
{
    var task = {};
    task['label'] = $('#label').val();
    createTask(task);
}

function createTask(task)
{
    var type = "POST";
    var url = "/json/create";
    // The key needs to match your method's input parameter (case-sensitive).

    $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(task),
            dataType: "json",
            contentType: "application/json"
        }).done(refreshData);
}

function refreshData()
{
    var url = "/json/all";
    $.getJSON(url, populateTaskList);  
}

function populateTaskList(data)
{
    $('#header-count').html(data.length + ' Task(s)');

    $('#list-task').empty();
    
    $.each(data, function(key, task) {
        console.log(task);
        
        $('#list-task').append(bullet(task));
        
    });
}

function bullet(task)
{
    var html = '<li>' + task.label + '<button onclick="deleteTask(' + task.id + ')">delete</button></li>'
    return html;
}

function deleteTask(id)
{
    var type = "POST";
    var url = "/json/delete";
    // The key needs to match your method's input parameter (case-sensitive).

    $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(id),
            dataType: "json",
            contentType: "application/json"
        }).done(refreshData);
}

$(init);
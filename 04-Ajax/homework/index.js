var URL = 'http://localhost:5000/amigos';

let showFriends = function () {
    $('#lista').empty();
    $.get(`${URL}`, function (friends) {
        console.log(friends)
        friends.forEach(e => {
            $('#lista').append(`<li id="${e.id}">${e.name}\
            <button id="${e.id}" onclick="deleteFriend(${e.id})">X</button></li>`)
        });
    })
}

let searchFriend = function () {
    let id = $('#input').val();
    console.log(id)
    if (id) {
        $.get(`${URL}/${id}`, function (friend) {
            console.log(friend);
            $('#amigo').text(`${friend.name}`)
            $('#input').val("")
        })
    }
    else {
        $('#amigo').text(`Ingresa un ID`)
    }
}

let deleteFriend = function (idCruz) {
    let id;
    if(typeof idCruz === 'number'){
        id = idCruz;
    }else {
        id = $('#inputDelete').val();
    }
    let friend;
    if (id) {
        $.get(`${URL}/${id}`, function (f) {
            friend = f;
        })
        $.ajax({
            url: `${URL}/${id}`,
            type: "DELETE",
            success: function () {
                $('#success').text(`Tu amigo, ${friend.name} fue eliminado corretamente`);
                $('#inputDelete').val("");
                showFriends();
            }
        })
    } else {
        $('#success').text('Tenes que ingresar un ID');
    }
}

$('#delete').click(deleteFriend);

$('#boton').click(showFriends);

$('#search').click(searchFriend);


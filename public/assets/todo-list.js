$(document).ready(function(){
    $('form').on('submit', function(){
        var item=$('form input');
        var todo={item: item.val()};

//here down we making a post to the server
        $.ajax({
            type:'POST',
            url:'/todo',
//the data to-do is the data on line 4 of this code
            data: todo,
//the data here is the array for the todo list
            success:function(data){
                //we just reload the page here
                location.reload();
            }
        });
        return false;
    })
})
 $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

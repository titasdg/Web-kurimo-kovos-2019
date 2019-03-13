

/*-----------------Requests------------------*/


var categoryAjax =new XMLHttpRequest();

var latestAjax = new XMLHttpRequest();

/*--------------------------------------------*/


const selector = document.querySelector('select');
const input = document.querySelector('input');


/*-------------atspausdina Kategorijas------------------------*/


categoryAjax.onreadystatechange = function(){
    if (categoryAjax.readyState === 4)
    {
        var array = JSON.parse(categoryAjax.responseText);
        var arr = Object.values(array);
        var product=' <option value="null">Kategorija</option>';
        for (let category of arr)
         {
             console.log();
             for(let info of category)
             {
                product+='<option value="'+info.idCategory+'">'+info.strCategory+'</option>';     
             }     
        }
    }
   
    document.querySelector('.kategorija').innerHTML = product;
 
}
categoryAjax.open('GET', 'https://www.themealdb.com/api/json/v1/1/categories.php');
categoryAjax.send();


/*---------------Latest recepies------------------------------*/


latestAjax.onreadystatechange = function(){
    if (latestAjax.readyState === 4)
    {
        var array = JSON.parse(latestAjax.responseText);
        var arr = Object.values(array);
        var div='<div>';
        for (let category of arr)
         {
            
             for(let info of category)
             {
               
                 div+='<div class= "recepie">';
                 div+='<img src="'+info.strMealThumb+'" class="img-rounded" alt="Cinque Terre"><div class="recepieInfo"><h1>'+info.strMeal+'</h1><p>'+info.strIngredient4+'</p><p>'+info.strInstructions+'</p></div></div>';     
             }     
        }
    }
    div+=' </div>';
    document.querySelector('.latest').innerHTML = div;
 
}
latestAjax.open('GET', 'https://www.themealdb.com/api/json/v1/1/latest.php');
latestAjax.send();



/*---------------------------------------------*/
 

 for(let i=0 ; i<4;i++)
{
 
   
    setTimeout( function(){
          var randomAjax = new XMLHttpRequest(); 
          randomAjax.onreadystatechange =  function()
          {
            if (randomAjax.readyState === 4)
    {
        var array = JSON.parse(randomAjax.responseText);
        console.log(array);
        var arr = Object.values(array);
       var div='';
        for (let category of arr)
         {
            
             for(let info of category)
             {
                 div+='<div class= "randomRcp">';
                 div+='<img src="'+info.strMealThumb+'" class="img-rounded" alt="Cinque Terre"><h1>'+info.strMeal+'</h1></div>';     
             }     
        }
       document.querySelector('.random').innerHTML += div;  
    }
      
          }
   
  
  randomAjax.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php');
randomAjax.send();

    }, 200*i);

}



/*--------------------------------------*/
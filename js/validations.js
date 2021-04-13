$(document).ready(function ()
		{
			var a=true;
			$("input").focus(function (e)
			{
		 	 	
				$(".number").bind('keyup blur', function()
				{
				 $(this).val( $(this).val().replace(/[^0-9-+]/g,'') );
				});
				
				$(".alpha").bind('keyup blur', function()
				{
				 $(this).val( $(this).val().replace(/[^a-z A-Z]/g,'') );
				});
				
				$(".email").blur(function(e) 
				{
					var sEmail = $(this).val();
					 if (!validateEmail(sEmail))
					 {
					 $("span").filter('.focus').empty();
					 $(this).after("<span class='focus'> Please fill the email</span>");
					 $("span").filter('.focus').fadeOut(4000).css("color","red");
					 e.preventDefault();
					 }
				});
				
			});
			
			function validateEmail(sEmail)
			{
				 var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
				 return(filter.test(sEmail));
			}
			$("form").submit(function(e)
			{
				
				$(":input").each(function() 
				{
						
						if($(this).val() === "")
						{
						//alert("Empty Fields!!");
						
						$(this).after("<div class='focus'> Please fill the "+ $(this).attr('name') +"</div>");
						$("div").filter('.focus').fadeOut(4000).css("color","red");
						e.preventDefault();
						}
				});
				
			});
		});
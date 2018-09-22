// JavaScript Document
 var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg","6.jpg"];
        var totalImages = 6;
        var currentImage = 0;
        showNext();
        function showNext() {
            if (currentImage == totalImages) currentImage = 0;
            document.getElementById("slider").innerHTML = "<img src='images/" + images[currentImage] + "' class='setValue' />"
            currentImage++;
        }
	function expand()
	{
		var expandedpara= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut diam eget erat eleifend pharetra. Cras ultrices pulvinar felis dapibus consectetur. Maecenas massa sapien, aliquam et molestie non, sodales vel felis. Etiam nec nibh ultricies, feugiat diam a, bibendum risus. Nullam a nulla quis ex hendrerit ullamcorper volutpat a sapien. Cras quis porta ipsum. Donec non ligula ipsum. Mauris sed nisi nibh. Aliquam mollis pharetra augue quis dictum. Morbi faucibus sapien velit, non tincidunt lectus luctus vitae. Vivamus turpis nisi, mollis placerat mauris id, bibendum pretium orci. Integer pulvinar venenatis est, sed fermentum elit ornare in. Proin in pharetra lacus. Nam purus risus, pulvinar in purus ut, rutrum rutrum libero. Cras ultricies dignissim sapien, at tempus mi pulvinar ac. Donec vehicula lorem id convallis pretium. Ut porta velit sed feugiat faucibus. Sed vestibulum scelerisque leo in maximus. Maecenas sit amet felis a massa aliquam sollicitudin. Ut ex augue, sodales in quam a, suscipit viverra lacus. Nullam sed augue nisi.";
		document.getElementById("para").innerHTML=expandedpara;
	}
	
	function buy()
	{
		var count=0;
		document.getElementById("cart").getElementsByTagName("p").innerHTML=count+1;
		var product;
		location.assign("orderform.html#order");
		var id=document.getElementsByClassName("btnbuy").id;
		switch(id){
			case "aircool":
			product=document.getElementById("aircooler").value;
			break;
			
			case "pedfan":
			product=document.getElementById("pedfan").value;
			break;
			
			case "aircool2":
			product=document.getElementById("aircooler2").value;
			break;
			
			case "window":
			product=document.getElementById("window").value;
			break;
			
			case "aircool3":
			product=document.getElementById("aircooler3").value;
			break;
			
			case "ceiling":
			product=document.getElementById("fan").value;
			break;
			}
			document.getElementById("list").value=product;
			
			
	}
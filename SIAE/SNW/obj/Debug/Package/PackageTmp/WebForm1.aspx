<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="SNW.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <%--<asp:FileUpload ID="FileUpload1" runat="server" />
        <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />--%>
            <input type="file" id="fileUpload" />
            <input id="upload" type="button" value="Upload" />
            <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
            <script type="text/javascript">
                function sleep(ms) {
                    var start = new Date().getTime(), expire = start + ms;
                    while (new Date().getTime() < expire) { }
                    return;
                }

                $("#upload").bind("click", function () {
                    console.log('hello');
                    sleep(5000);
                    console.log('world');
                });

                //$(function () {
                //    $("#upload").bind("click", function () {
                //        //Get reference of FileUpload.
                //        var fileUpload = $("#fileUpload")[0];

                //        //Check whether the file is valid Image.
                //        console.log("cramosc01");
                //        var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.jpg|.png|.gif)$");
                //        console.log("cramosc02");
                //        if (regex.test(fileUpload.value.toLowerCase())) {
                //            //Check whether HTML5 is supported.
                //            console.log("cramosc03");
                //            if (typeof (fileUpload.files) != "undefined") {
                //                //Initiate the FileReader object.
                //                console.log("cramosc04");
                //                var reader = new FileReader();
                //                //Read the contents of Image File.
                //                reader.readAsDataURL(fileUpload.files[0]);
                //                console.log("cramosc05");
                //                reader.onload = function (e) {
                //                    console.log("cramosc06");
                //                    //Initiate the JavaScript Image object.
                //                    var image = new Image();
                //                    //Set the Base64 string return from FileReader as source.
                //                    console.log("cramosc07");
                //                    //console.log("e.target.result 01" + e.target.result);
                //                    image.src = e.target.result;9
                //                    //console.log("e.target.result 02" + e.target.result);
                //                    console.log("cramosc08");
                //                    image.onload = function () {
                //                        console.log("cramosc09");
                //                        //Determine the Height and Width.
                //                        var height = this.height;
                //                        console.log("cramosc10");
                //                        var width = this.width;
                //                        console.log("cramosc11");
                //                        if (height > 100 || width > 100) {
                //                            console.log("cramosc12");
                //                            alert("Height and Width must not exceed 100px.");
                //                            console.log("cramosc13");
                //                            return false;
                //                        }
                //                        console.log("cramosc14");
                //                        alert("Uploaded image has valid Height and Width.");
                //                        console.log("cramosc15");
                //                        return true;
                //                    };
                //                    console.log("cramosc16");
                //                }
                //            } else {
                //                console.log("cramosc17");
                //                alert("This browser does not support HTML5.");
                //                return false;
                //            }
                //        } else {
                //            alert("Please select a valid Image file.");
                //            return false;
                //        }
                //    });
                //});
            </script>

        </div>
    </form>
</body>
</html>

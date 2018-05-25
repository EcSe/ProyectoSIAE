<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ObtenerBytesArchivo.aspx.cs" Inherits="SNW.forms.ObtenerBytesArchivo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:FileUpload ID="prueba" runat="server" />
        
        <br />
        <asp:Label ID="Label2" runat="server" Text="VC_ID_ENTIDAD"></asp:Label><asp:TextBox ID="txtVC_ID_ENTIDAD" runat="server" Text="CAMP_EJE"></asp:TextBox>
        <br />
        <asp:Label ID="Label1" runat="server" Text="VC_ID_VALOR"></asp:Label><asp:TextBox ID="txtVC_ID_VALOR" runat="server" Text ="000001"></asp:TextBox>
        <br />
        <asp:Label ID="Label3" runat="server" Text="VC_VALOR_CADENA1"></asp:Label><asp:TextBox ID="txtVC_VALOR_CADENA1" runat="server" Text="Capt 1: Configuration"></asp:TextBox>
        <br />
        <asp:Label ID="Label4" runat="server" Text="VC_ID_USUARIO_CRE"></asp:Label><asp:TextBox ID="txtVC_ID_USUARIO_CRE" runat="server" Text="CRAMOS" ></asp:TextBox>

        <asp:Button ID="btnGuardar" runat="server" Text="Guardar" OnClick="btnGuardar_Click" />

    </div>
    </form>
</body>
</html>

// Thêm mới tài khoản
let nameAccount = document.getElementById("nameAccount");
let gender = document.getElementById("gender");
let myBirthday = document.getElementById("birthday");
let address = document.getElementById("address");
let myForm = document.getElementById("form");

// các lỗi
let nameError = document.getElementById("nameError");
let birthdayError = document.getElementById("birthdayError");
let addressError = document.getElementById("addressError");

let tableUser = JSON.parse(localStorage.getItem("user")) || [];

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if(!nameAccount.value){
        nameError.style.display = "block";
    }else{
        nameError.style.display = "none";
    }

    var today = new Date();
    let birthday = new Date(myBirthday.value);
    if(birthday > today){
        birthdayError.style.display = "block";
    }else{
        birthdayError.style.display = "none";
    }

    if(nameAccount.value && myBirthday.value && gender.value && address.value){
        const user = {
            id: Math.floor(Math.random() * 100),
            name: nameAccount.value,
            birthday: myBirthday.value,
            gender: gender.value,
            address: address.value,
        };

        tableUser.push(user); // Thêm người dùng mới vào mảng tableUser
        localStorage.setItem("user", JSON.stringify(tableUser)); // Cập nhật localStorage

        appendUserToTable(); // Gọi lại hàm để cập nhật bảng

        nameAccount.value = "";
        myBirthday.value = "";
        gender.value = "";
        address.value = "";
    }
});

function appendUserToTable() {
    let tableList = document.getElementById("tableBody");
    tableList.innerHTML = "";
    for(let i = 0; i < tableUser.length; i++){
        tableList.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${tableUser[i].name}</td>
            <td>${tableUser[i].gender === "1" ? "Nam" : tableUser[i].gender === "2" ? "Nữ": "Khác"}</td>
            <td>${tableUser[i].birthday}</td>
            <td>${tableUser[i].address}</td>
            <td>
                <button type="button" class="btn btn-warning" onclick="editUser(${tableUser[i].id}">Sửa</button>
                <button type="button" class="btn btn-danger" onclick="deleteUser(${tableUser[i].id})">Xóa</button>
            </td>
        </tr>
        
        `;
    }
}

appendUserToTable();

// Xóa tài khoản
function deleteUser(id){
    let index = tableUser.findIndex((user) => user.id == id);

    if(index !== -1){
        let confirms = confirm("Bạn có chắc chắn muốn xóa không?");
        if(confirms){
            tableUser.splice(index, 1);
            localStorage.setItem("user", JSON.stringify(tableUser));
            window.location.reload();
        }else{
            alert("không có gì");
        }
    }
}

function editUser(id){
    var obj = tableUser.find((user) => user.id == id);
    nameAccount.value = obj.name;
    gender.value = obj.gender;
    myBirthday.value = obj.birthday;
    address.value = obj.address;
    document.querySelector(".id").value = obj.id;
}

function updateUser() {
    let userId = document.querySelector(".userId").value;
    let index = tableUser.findIndex((user) => user.id == userId);
    if (index !== -1) {
        tableUser[index].name = nameAccount.value;
        tableUser[index].gender = gender.value;
        tableUser[index].birthday = myBirthday.value;
        tableUser[index].address = address.value;
        localStorage.setItem("user", JSON.stringify(tableUser));
        window.location.reload(); // Tải lại trang để hiển thị thông tin đã được cập nhật
    }
}
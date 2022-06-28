
const customerForm = document.getElementById("customerform");
const customerContainer = document.querySelector(".customers");
const nameInput = customerForm["name"];
const emailInput = customerForm["email"];
const phoneInput = customerForm["phone"];

const customers = JSON.parse(localStorage.getItem("customers")) || [];

const addCustomer = (name, email, phone) => {
    customers.push({
        name,
        email,
        phone,
    });
    localStorage.setItem("customers",JSON.stringify(customers));
    return { name, email, phone};
};

const createCustomerElement = ({ name, email, phone})=>{
    const customerDiv = document.createElement('div');
    const customerName = document.createElement('h2');
    const customerEmail = document.createElement('h4');
    const customerPhone = document.createElement('h6');

    customerName.innerText = "Customer Name:" + name;
    customerEmail.innerText = "Customer Email:" + email;
    customerPhone.innerText = "Customer Phone:" + phone;
    
    customerDiv.append(customerName, customerEmail, customerPhone);
    customerContainer.appendChild(customerDiv);
};

customers.forEach(createCustomerElement);

customerForm.onsubmit = e =>{
    e.preventDefault();

    const newCustomer = addCustomer(
        nameInput.value,
        emailInput.value,
        phoneInput.value
    );
    createCustomerElement(newCustomer);

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
};

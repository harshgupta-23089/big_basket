let product_div = document.getElementById('product-div')

const productArray = [
    { title: "Daal & pulse", price: 2300, img_url: './image/download.jpg', caterory: "Grocery & Staples" },
    { title: "Dry Fruit & nuts", price: 3000, img_url: './image/download2.jpg', caterory: "Grocery & Staples" },
    { title: "Edible oils", price: 3000, img_url: './image/download3.jpg', caterory: "Grocery & Staples" },
    { title: "Riced Cauliflower", price: 3000, img_url: './image/download4.jpg', caterory: "Grocery & Staples" },
    { title: "lotion", price: 3000, img_url: './image/download5.jpg', caterory: "Personal Care" },
    { title: "Hair Oil", price: 3000, img_url: './image/download6.jpg', caterory: "Personal Care" },
    { title: "Hygine", price: 3000, img_url: './image/download7.jpg', caterory: "Personal Care" },
    { title: "herbal", price: 3000, img_url: './image/download8.jpg', caterory: "Personal Care" },
    { title: "Mop", price: 3000, img_url: './image/download9.jpg', caterory: "Household Care" },
    { title: "Esential Items", price: 3000, img_url: './image/download15.jpg', caterory: "Household Care" },
    { title: "Safety Gloves", price: 3000, img_url: './image/download-1.jpg', caterory: "Household Care" },
    { title: "Juice", price: 3000, img_url: './image/download10.jpg', caterory: "Breakfast & Dairy" },
    { title: "Dairy Product", price: 3000, img_url: './image/download11.jpg', caterory: "Breakfast & Dairy" },
    { title: "Healthy Friut", price: 3000, img_url: './image/download12.jpg', caterory: "Breakfast & Dairy" },
    { title: "Winter Fruits", price: 3000, img_url: './image/download13.jpg', caterory: "Fruit Store" },
    { title: "Fiber Fruit", price: 3000, img_url: './image/download14.jpg', caterory: "Fruit Store" },
    { title: "snaks", price: 3000, img_url: './image/download-1.jpg', caterory: "Biscuits & Snaks" },
    { title: "All Biscuits", price: 3000, img_url: './image/download-2.jpg', caterory: "Biscuits & Snaks" },
    { title: "Chips", price: 3000, img_url: './image/download-3.jpg', caterory: "Biscuits & Snaks" },
    { title: "Spicy Tasty Mixture", price: 3000, img_url: './image/download-4.jpg', caterory: "Biscuits & Snaks" },
    

]

const dis_product = (products) => {

    products.forEach((item) => {

        let item_div = document.createElement('div')
        item_div.classList.add('item-div')

        let img = document.createElement('img')
        let btn = document.createElement('button')
        let p = document.createElement('p')

        btn.textContent = "Add"
        p.textContent = "Rs." + item.price
        btn.classList.add('btn')
        img.src = item.img_url

        item_div.appendChild(img)
        item_div.appendChild(p)
        item_div.appendChild(btn)


        product_div.appendChild(item_div)
    })
}

dis_product(productArray)
// -------------------------------------------------------

const groles = (category) => {
    // alert('kkkk')
    // removeAllChildNodes(product_div)
    product_div.innerHTML=''
    let filterArray = []
    if (category == "All") {
        filterArray = productArray
        dis_product(filterArray)
    } else {
        filterArray = productArray.filter((item) => {
            return item.caterory == category
        })
        dis_product(filterArray)    
    }
    

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
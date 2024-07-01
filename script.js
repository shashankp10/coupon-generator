function generateCoupon() {
    const orgName = document.getElementById('orgName').value;
    const discount = document.getElementById('discount').value;
    const dealDesc = document.getElementById('dealDesc').value;
    const expiryDate = document.getElementById('expiryDate').value;

    if (orgName && discount && dealDesc && expiryDate) {
        if (dealDesc.split(' ').length > 30) {
            alert('Description must not exceed 30 words.');
            return;
        }
        if (orgName.split(' ').length > 5) {
            alert('Organization name must not exceed 5 words.');
            return;
        }
        if(discount < 0 || discount > 100){
            alert('Discount must be between 0 and 100');
            return;
        }

        document.getElementById('couponOrgName').innerText = orgName.toUpperCase()+" GIFT COUPON";
        document.getElementById('couponDesc').innerText = dealDesc;
        document.getElementById('couponDiscount').innerText = `Get ${discount}% OFF`;
        const formattedExpiryDate = formatDate(expiryDate);
        document.getElementById('couponExpiry').innerText = `Valid till: ${formattedExpiryDate}`;
        document.getElementById('coupon').style.visibility = 'visible';
        document.getElementById('downloadBtn').style.display = 'block';
    } else {
        alert('Please fill out all fields.');
    }
}
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
}
function downloadCoupon() {
    const coupon = document.getElementById('coupon');
    html2canvas(coupon).then(canvas => {
        const link = document.createElement('a');
        link.download = 'coupon.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

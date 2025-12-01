const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send order confirmation email
const sendOrderEmail = async (order, user) => {
  try {
    const transporter = createTransporter();

    // Create items HTML
    const itemsHtml = order.items
      .map(
        item => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.name}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.size}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">₹${item.price}</td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">₹${item.price * item.quantity}</td>
        </tr>
      `
      )
      .join('');

    const mailOptions = {
      from: `"Clothing Store" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: `Order Confirmation - #${order._id}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #4CAF50;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              background-color: #f9f9f9;
              padding: 20px;
              border: 1px solid #ddd;
            }
            .order-details {
              background-color: white;
              padding: 15px;
              margin: 20px 0;
              border-radius: 5px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th {
              background-color: #f2f2f2;
              padding: 10px;
              text-align: left;
              border-bottom: 2px solid #ddd;
            }
            .total {
              font-size: 20px;
              font-weight: bold;
              color: #4CAF50;
              text-align: right;
              margin-top: 20px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Order Confirmation</h1>
            <p>Thank you for your purchase!</p>
          </div>
          
          <div class="content">
            <p>Dear ${user.name},</p>
            <p>Your order has been successfully placed. Here are the details:</p>
            
            <div class="order-details">
              <p><strong>Order ID:</strong> ${order._id}</p>
              <p><strong>Order Date:</strong> ${new Date(order.orderDate).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
              <p><strong>Status:</strong> ${order.status}</p>
            </div>

            <h3>Order Items:</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>

            <div class="total">
              Total Amount: ₹${order.totalPrice}
            </div>

            <p style="margin-top: 30px;">We will send you another email once your order has been shipped.</p>
            <p>If you have any questions about your order, please contact our customer support.</p>
          </div>

          <div class="footer">
            <p>Thank you for shopping with us!</p>
            <p style="font-size: 12px; color: #999;">
              This is an automated email. Please do not reply to this message.
            </p>
          </div>
        </body>
        </html>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
};

module.exports = { sendOrderEmail };
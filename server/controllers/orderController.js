const Order = require("../models/Order");
const nodemailer = require("nodemailer");

const createOrder = async (req, res) => {
  try {
    const { cart, total, email, address, phone, pincode } = req.body;

    const safeTotal = isNaN(total) ? 0 : total;

    // ✅ SAVE ORDER
    const order = new Order({
      cart,
      total: safeTotal,
      email,
      address,
      phone,
      pincode
    });

    await order.save();

    // 🔥 EMAIL TRY (fail ho to crash na ho)
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.OWNER_EMAIL,
        subject: "🛒 New Order Received",

        html: `
        <div style="font-family: Arial; background:#f4f4f4; padding:20px">
          <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:10px">
            
            <h2 style="color:#4f46e5;">New Order 🚀</h2>

            <h3>Customer Details</h3>
            <p><b>Email:</b> ${email || "-"}</p>
            <p><b>Phone:</b> ${phone || "-"}</p>
            <p><b>Address:</b> ${address || "-"}</p>
            <p><b>Pincode:</b> ${pincode || "-"}</p>

            <hr/>

            <h3>Order Items</h3>

            ${
              Array.isArray(cart)
                ? cart.map(item => `
                  <div style="margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:10px">
                    <p><b>${item.name || "Item"}</b></p>
                    <p>₹${item.price || 0} × ${item.qty || 1}</p>
                  </div>
                `).join("")
                : "<p>No items</p>"
            }

            <hr/>

            <h2 style="color:green">Total: ₹${safeTotal}</h2>

          </div>
        </div>
        `
      });

      console.log("Email sent ✅");

    } catch (mailError) {
      console.log("Email failed ❌", mailError.message);
    }

    res.status(201).json({ message: "Order saved ✅" });

  } catch (error) {
    console.error("ORDER ERROR:", error);
    res.status(500).json({ message: "Error saving order ❌" });
  }
};

module.exports = { createOrder };
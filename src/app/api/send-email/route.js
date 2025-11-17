import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const formData = await request.json();

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Email HTML content
        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    h2 { color: #7c3aed; border-bottom: 3px solid #7c3aed; padding-bottom: 10px; }
                    h3 { color: #ec4899; margin-top: 25px; }
                    .info-row { margin: 10px 0; padding: 8px; background: #f9fafb; border-left: 3px solid #7c3aed; }
                    .label { font-weight: bold; color: #4b5563; }
                    .value { color: #1f2937; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>🎉 New Membership Registration</h2>
                    
                    <h3>👤 Personal Information</h3>
                    <div class="info-row">
                        <span class="label">Name:</span> 
                        <span class="value">${formData.firstName} ${formData.lastName}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Father's Name:</span> 
                        <span class="value">${formData.fatherFirst} ${formData.fatherLast}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Address:</span> 
                        <span class="value">${formData.fullAddress}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Email:</span> 
                        <span class="value">${formData.email}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Mobile:</span> 
                        <span class="value">${formData.mobile}</span>
                    </div>
                    
                    <h3>💼 Professional Details</h3>
                    <div class="info-row">
                        <span class="label">Brand Name:</span> 
                        <span class="value">${formData.brandName}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Year of Establishment:</span> 
                        <span class="value">${formData.yearOfEstablishment}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Annual Turnover:</span> 
                        <span class="value">${formData.turnover}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Media Experience:</span> 
                        <span class="value">${formData.workingWith.join(', ')}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Channel/Publication Name:</span> 
                        <span class="value">${formData.channelName}</span>
                    </div>
                    
                    <h3>💳 Payment Details</h3>
                    <div class="info-row">
                        <span class="label">Amount Paid:</span> 
                        <span class="value">₹${formData.joiningFee}</span>
                    </div>
                    <div class="info-row">
                        <span class="label">Transaction ID:</span> 
                        <span class="value">${formData.txnNumber}</span>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Membership: ${formData.firstName} ${formData.lastName}`,
            html: emailHtml,
        });

        console.log('Email sent successfully for:', formData.email);

        return NextResponse.json({ 
            success: true, 
            message: 'Form submitted and email sent successfully' 
        });

    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to submit form: ' + error.message },
            { status: 500 }
        );
    }
}

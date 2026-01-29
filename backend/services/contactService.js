export const contactService = {
  async sendMessage(data) {
    // Validate data
    if (!data.name || !data.email || !data.message) {
      throw new Error('All fields are required');
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      throw new Error('Invalid email address');
    }

    // Simulate database/email delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, you would send an email here using SendGrid/Resend/Nodemailer
    console.log('Message received:', data);

    return { success: true, message: 'Message sent successfully' };
  }
};

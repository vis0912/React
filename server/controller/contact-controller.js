import Contact from "../models/contact-model.js";

const contact = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;

    const newContact = await Contact.create({
      username,
      email,
      message,
    });

    res.status(201).json({ msg: "Successfully added a contact" });
  } catch (error) {
    next(error);
  }
};

const contactController = { contact };

export default contactController;

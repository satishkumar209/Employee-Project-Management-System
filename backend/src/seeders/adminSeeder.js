const User = require("../modules/auth/model/user.model");

const createAdmin = async () => {
  try {
    // Check if admin already exists
    const adminExists = await User.findOne({
      email: "admin@company.com",
    });

    if (adminExists) {
      console.log("✅ Admin already exists.");
      return;
    }

    // Create default admin
    await User.create({
      firstName: "Admin",
      lastName: "User",
      email: "admin@company.com",
      password: "Admin@123", // Will be hashed automatically
      phone: "9999999999",
      department: "Administration",
      designation: "Super Admin",
      role: "ADMIN",
      status: "ACTIVE",
    });

    console.log("✅ Default Admin Created Successfully");
    console.log("Email    : admin@company.com");
    console.log("Password : Admin@123");
  } catch (error) {
    console.error("❌ Admin Seeder Error");
    console.error(error.message);
  }
};

module.exports = createAdmin;
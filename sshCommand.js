const { NodeSSH } = require('node-ssh');

const ssh = new NodeSSH();

// SSH Configuration
const sshConfig = {
  host: 'your_hostname',   // Replace with your server's IP or hostname
  username: 'your_username',  // Replace with the SSH username
  password: 'your_password',  // Use password or privateKey
  // privateKey: '/path/to/your/private-key',  // Optional if using SSH key authentication
};

async function executeSSHCommands() {
  try {
    // Establish SSH connection
    console.log('Connecting to the server...');
    await ssh.connect(sshConfig);
    console.log('SSH connection established!');

    // List of commands to execute
    const commands = [
      'mylist'
    ];

    // Execute commands sequentially
    for (const command of commands) {
      console.log(`Executing command: ${command}`);
      const result = await ssh.execCommand(command);
      console.log(`STDOUT: ${result.stdout}`);
      console.log(`STDERR: ${result.stderr}`);
    }

    console.log('All commands executed successfully!');
  } catch (error) {
    console.error('Error during SSH execution:', error.message);
  } finally {
    ssh.dispose(); // Close the SSH connection
    console.log('SSH connection closed.');
  }
}

// Run the function
executeSSHCommands();
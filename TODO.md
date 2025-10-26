# TODO: Add Messaging and File Sharing Features

## Step 1: Update Project Data Structure ✅
- Modify projects state initialization in App.jsx to include messages: [] and files: [] for each project.

## Step 2: Create Messages Page ✅
- Create src/Pages/Messages.jsx with project selector and tabs for Messages and Files.

## Step 3: Create Messaging Components ✅
- Create src/Components/MessageList.jsx to display messages.
- Create src/Components/ChatInput.jsx for sending messages.
- Create src/Components/FileList.jsx to display shared files.
- Create src/Components/FileUpload.jsx for uploading files.

## Step 4: Update Routing ✅
- Add /messages route in App.jsx.

## Step 5: Update Sidebar ✅
- Add Messages nav link in Sidebar.jsx.

## Step 6: Integrate Components in Messages Page ✅
- Embed MessageList, ChatInput, FileList, FileUpload in Messages.jsx with tabs.

## Step 7: Ensure Data Persistence ✅
- Update localStorage saving to include messages and files (files as base64).

## Step 8: Add Project Selection for Tasks (Optional) ✅
- Add "Select for Tasks" button in ProjectCard.jsx to set selectedProject.

## Step 9: Testing and Verification ✅
- Test messaging and file sharing.
- Verify dark mode and responsiveness.
- Handle file size limits.

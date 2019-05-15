const fs = require('fs');
var path = require('path');

const checkExtension = (extension) => {

    if (extension.trim().toLowerCase() === "txt") {
        console.log('File is txt extension.')
        return true;
    } else if (extension.trim().toLowerCase() === "csv") {
        console.log('File is csv extension.')
        return true;
    } else {
        console.log('File extension is not supported! Supported extensions are txt and csv!')
    }
}

const checkIfFileExists = (filePath) => {

    if (fs.existsSync(filePath)) {

        let stats = fs.lstatSync(filePath);

        if (stats.isFile(filePath)) {
            console.log("File with this name already exist!")
            return true;
        } else {
            console.log("This is not file name!")
            return false;
        }
    } else {
        console.log("File with this name doesn't exist!")
        return false;
    }
}
const checkIfFolderExists = (folderPath) => {
    console.log(folderPath, "blabka");

    if (fs.existsSync(folderPath)) {

        let stats = fs.lstatSync(folderPath);

        if (stats.isDirectory()) {
            console.log("Folder with this name already exist!")
            return true;
        } else {
            console.log("This is not folder name!")
            return false;
        }
    } else {
        console.log("Folder with this name doesn't exist!")
        return false;
    }
}


const createFolder = (path) => {

    if (fs.mkdirSync(path) == undefined) {
        console.log('Folder successfully created!');
        return true;
    } else {
        console.log('Failed to create folder!');
        return false;
    }
}

const writeIntoTxtFile = (extension, id, username, api) => {

    //fullFolderPath = getFullFolderPath(id);
    //fullFilePath = getFullFilePath(extension, username, id);

    let folderName = id;
    let fileName = username;
    let folderPath = `../userFiles/${folderName}`;
    let fullFolderPath = path.join(__dirname, folderPath);
    let filePath = `../userFiles/${folderName}/${fileName}.${extension}`;
    let fullFilePath = path.join(__dirname, filePath);

    let timeAPI = Date(Date().now);
    let fileContent = `ID: ${id} API: ${api} Time: ${timeAPI},`;

    if (checkExtension(extension)) {
        if (!checkIfFolderExists(fullFolderPath)) {
            if (createFolder(fullFolderPath)) {
                writeIntoFile(fullFilePath, fileContent);
            }
        } else {
            if (!checkIfFileExists(fullFilePath)) {
                writeIntoFile(fullFilePath, fileContent);
            } else {
                updateFile(fullFilePath, fileContent)
            }

        }
    }
}

const writeIntoFile = (path, content) => {
    fs.writeFile(path, content, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('uspesno!!')
        }
    });
}

const updateFile = (path, content) => {
    fs.appendFile(path, `\n${content}`, (err) => {
        if (err) throw err;
        console.log("The data was succesfully updated!")
    })
}

const getFullFilePath = (extension, username, id) => {
    let folderName = id;
    let fileName = username;
    let filePath = `../../userFiles/${folderName}/${fileName}.${extension}`;
    let fullFilePath = path.join(__dirname, filePath);
    return fullFilePath;
}

const deleteFile = (path) => {
    if(checkIfFileExists(path)){
        fs.unlink(path, (err) => {
            if (err) throw err;
            console.log('File has been successfully deleted!');
        });
    }
}

const getFullFolderPath = (id) => {
    let folderPath = `../../userFiles/${id}`;
    let fullFolderPath = path.join(__dirname, folderPath);
    return fullFolderPath;
}

const deleteFolder = (path) => {
    if(checkIfFolderExists(path)){
        fs.rmdir(path, (err) => {
            if (err) throw err;
            console.log('Folder has been successfully deleted!');
        });
    }
}

const removeUsersFolder = (id) => {
    path = getFullFolderPath(id);
    if(!deleteFolder(path)){
        console.log('Failed to delete folder!');
    }
}
const removeUsersFile = (extension, username, id) => {
    path = getFullFilePath(extension, username, id);
    if(!deleteFile(path)){
        console.log('Failed to delete file!');
    }
}

const readFile = (extension, id, username) => {

    let path = getFullFilePath(extension, id, username);
    var fileContent = '';

    if(checkIfFileExists(path)){
        
        fileContent = fs.readFileSync(path);

        if(fileContent !== ''){
            console.log(fileContent);
            return fileContent;
        }else{
            console.log('File is empty!');
            return 'File is empty.';
        }
    }      
}

module.exports = {
    writeIntoTxtFile,
    checkIfFileExists,
    checkIfFolderExists,
    createFolder,
    updateFile,
    writeIntoFile,
    deleteFile,
    deleteFolder,
    getFullFilePath,
    getFullFolderPath,
    removeUsersFolder,
    removeUsersFile,
    readFile
}
const axios = require('axios');
const fs = require('fs');

// URL do SharePoint onde será feito o upload
const sharepointUploadUrl = 'https://seu_site_sharepoint.com/sites/sua_lista/documentos';

const imgcontroller = {

  // Função para fazer o upload de um arquivo para o SharePoint
  async uploadFileToSharePoint(req, res) {
    try {
      // Autenticação
      const accessToken = 'seu_access_token';

      // Caminho do arquivo local a ser enviado
      const filePath = req.file.path; // Assumindo que o arquivo é enviado via formulário de upload e você está usando multer

      // Leitura do arquivo
      const fileData = fs.readFileSync(filePath);

      // Configuração da requisição
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      };

      // ID do usuário que está fazendo o upload
      const userId = req.user.id; // Supondo que o ID do usuário esteja disponível no objeto de solicitação (req.user)

      // Verifica se a pasta do usuário já existe
      const userFolderPath = `/usuario/${userId}`;
      const folderExistsResponse = await axios.get(`${sharepointUploadUrl}?path=${userFolderPath}`, config);
      const folderExists = folderExistsResponse.data.length > 0;

      // Se a pasta não existe, cria
      if (!folderExists) {
        const folderRequestBody = {
          'path': userFolderPath
        };
        await axios.post(sharepointUploadUrl, folderRequestBody, config); // Cria a pasta do usuário no SharePoint
      }

      // Corpo da requisição (metadados do arquivo)
      const requestBody = {
        'FileName': req.body.fileName,
        'Title': req.body.title, // Supondo que o título do arquivo seja enviado no corpo da solicitação
        'ContentType': req.file.mimetype,
        'data': fileData.toString('base64'),
        'path': `${userFolderPath}/${req.file.originalname}` // Caminho completo do arquivo, incluindo a pasta do usuário
      };

      // Realiza o upload do arquivo
      const response = await axios.post(sharepointUploadUrl, requestBody, config);

      // Responde ao cliente com a resposta do SharePoint
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Erro ao enviar arquivo para o SharePoint:', error);
      res.status(500).json({ error: 'Erro ao enviar arquivo para o SharePoint.' });
    }
  }
}

// Exporta a função para uso em outras partes do código
module.exports = imgcontroller;

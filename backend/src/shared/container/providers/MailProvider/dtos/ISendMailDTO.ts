import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContect {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContect;
  from?: IMailContect;
  subject: string;
  templateData: IParseMailTemplateDTO;
}

import {
  Text,
  RichText,
  Field,
  NextImage,
  Link,
  withDatasourceCheck,
  ImageField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import cardStyles from './card.module.scss';

type CardProps = ComponentProps & {
  fields: {
    title: Field<string>;
    text: Field<string>;
    image: ImageField;
    link: LinkField;
  };
};

const cardStyle = `card ${cardStyles.aucard}`;
const cardBody = `card-body ${cardStyles.aucardbody}`;

const Card = ({ fields }: CardProps): JSX.Element => (
  <div className={cardStyle}>
    <NextImage className="card-img-top" alt="AU Image" field={fields.image} />
    <div className={cardBody}>
      <Text tag="h5" className="card-title" field={fields.title} />
      <RichText className="card-text" field={fields.text} />
      <Link className="btn btn-link btn-chevron" field={fields.link} />
    </div>
  </div>
);

export default withDatasourceCheck()<CardProps>(Card);

import {
  Text,
  RichText,
  Field,
  NextImage,
  withDatasourceCheck,
  ImageField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ContentBannerProps = ComponentProps & {
  fields: {
    title: Field<string>;
    text: Field<string>;
    image: ImageField;
  };
};

const ContentBanner = (props: ContentBannerProps): JSX.Element => (
  <div className="card mb-3">
    {props.params?.showonright === '1' ? (
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <Text tag="h5" className="card-title" field={props.fields.title} />
            <RichText className="card-text" field={props.fields.text} />
          </div>
        </div>
        <div className="col-md-4">
          <NextImage
            className="img-fluid rounded-start"
            alt="AU Image"
            field={props.fields.image}
          />
        </div>
      </div>
    ) : (
      <div className="row g-0">
        <div className="col-md-4">
          <NextImage
            className="img-fluid rounded-start"
            alt="AU Image"
            field={props.fields.image}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Text tag="h5" className="card-title" field={props.fields.title} />
            <RichText className="card-text" field={props.fields.text} />
          </div>
        </div>
      </div>
    )}
  </div>
);

export default withDatasourceCheck()<ContentBannerProps>(ContentBanner);

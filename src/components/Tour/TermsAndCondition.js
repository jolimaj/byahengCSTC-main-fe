import * as React from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  Typography,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Terms(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    props.isOpen(false);
    props.agree(true);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.isOvenValue}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          style={{
            fontFamily: "PoppinsBold",
            color: "#134611",
          }}
        >
          {
            "Data Privacy and Terms and Conditions of ByahengCSTC Virtual Tours Privacy Policy"
          }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body2" gutterBottom>
              These terms and conditions outline the rules and regulations for
              the use of ByahengCSTC Virtual Tour’s Website, located at{" "}
              <Link
                href="https://byaheng-cstc.herokuapp.com/"
                underline="none"
                color="#134611"
              >
                Byaheng CSTC
              </Link>
            </Typography>
            <Typography variant="body2" gutterBottom>
              ByahengCSTC platform ( “site”) values and respects your right to
              privacy. We are committed to protect the privacy of our website
              visitors. We will only collect, record, store, process, and use
              your personal information in accordance with the Data Privacy Act
              of 2012, its Implementing Rules and Regulations, the issuances by
              the National Privacy Commission, and other pertinent laws.
            </Typography>
            <Typography variant="body2" gutterBottom>
              This Privacy Policy informs you of updates in our corporate
              policies regarding the collection, use, storage, disclosure, and
              disposal of personal information we receive and collect from our
              customers, and any individual who communicates, raises inquiries
              and concerns, as well as transacts with us through our authorized
              representatives.
            </Typography>
            <Typography variant="body2" gutterBottom>
              We will only use your data based on the limitations set by this
              policy. The outline below provides the manner by which we manage
              the personal information that we will obtain from you if you visit
              our website.
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              Personal Information
            </Typography>
            <Typography variant="body2" gutterBottom>
              Personal Information refers to any information, whether recorded
              in a material form or not, from which the identity of an
              individual is apparent or can be reasonably and directly
              ascertained by the entity holding the information, or when put
              together with other information would directly and certainly
              identify an individual.<em> Sensitive Personal Information</em> is
              any attribute of your personal information that can discriminate,
              qualify, or classify you such as your age, date of birth, marital
              status, government-issued identification numbers, account numbers,
              and financial information. <em>Privileged Information</em> is any
              and all forms of information which, under the Rules of Court and
              other pertinent laws, constitute privileged communication.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Under the Data Privacy Act of 2012, you have the following rights:
            </Typography>
            <Typography variant="body2" gutterBottom>
              <ol>
                <li>
                  <b>Right to be informed</b> – you may request the details as
                  to how your personal information is being processed or have
                  been processed by the ByahengCSTC, including the existence of
                  automated decision-making and profiling systems;{" "}
                </li>
                <li>
                  <b>Right to access </b> – upon written request, you may demand
                  reasonable access to your personal information, which may
                  include the contents of your processed personal information,
                  the manner of processing, sources where they were obtained,
                  recipients and reason of disclosure;{" "}
                </li>
                <li>
                  <b>Right to dispute </b> – you may dispute inaccuracy or error
                  in your personal information in the ByahengCSTC systems
                  through our contact center representatives;{" "}
                </li>
                <li>
                  <b>Right to object </b> – you may suspend, withdraw, and
                  remove your personal information in certain further
                  processing, upon demand, which include your right to opt-out
                  to any commercial communication or advertising purposes from
                  the ByahengCSTC{" "}
                </li>
                <li>
                  <b>Right to data erasure </b> – based on reasonable grounds,
                  you have the right to suspend, withdraw or order the blocking,
                  removal or destruction of your personal data from the
                  ByahengCSTC system;
                </li>
                <li>
                  <b>Right to secure data portability </b> – as data subject,
                  you have every right to be indemnified for any damages
                  sustained due to such violation of your right to privacy
                  through inaccurate, false, unlawfully obtained or unauthorized
                  use of your information; and
                </li>
                <li>
                  <b>Right to file a complaint </b> – you may file your
                  complaint or any concerns with our legal compliance division:
                </li>
              </ol>
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              Collection of Personal Information{" "}
            </Typography>
            <Typography variant="body2" gutterBottom>
              We collect the following categories of Personal Data about Site
              visitors, clients, prospective clients, and other third parties:
            </Typography>
            <Typography variant="body2" gutterBottom>
              <ol>
                <li>
                  Device data: Computer Internet Protocol (IP) address, unique
                  device identifier (UDID), cookies and other data linked to a
                  device, and data about usage of our website (Usage Data)
                </li>
                <li>
                  Basic and Client Service data: Name, gender, course, last
                  attended school, guardian, phone number, address, email
                  address, and contact details;
                </li>
                <li>
                  Social Media data: Gender, date of birth, status, or any other
                  matters which are readily accessible if you link your account
                  with our website;
                </li>
                <li>
                  Transaction data: Personal data contained in documents,
                  correspondence or other material provided by or relating to
                  transactions conducted with or by our clients/prospective
                  clients.
                </li>
              </ol>
            </Typography>
            <Typography variant="body2" gutterBottom>
              We will only collect your personal information if you voluntarily
              submit the information to us. If you choose not to submit your
              personal information to us or subsequently withdraw your consent
              to our use of your personal information, we may not be able to
              adequately respond to your inquiries or avail of our services.
            </Typography>
            <Typography variant="body2" gutterBottom>
              When we receive data from our clients about employees, customers
              or other individuals, the client is responsible for ensuring that
              any such data is transferred to us in compliance with applicable
              data protection laws.
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              Use of Personal Data{" "}
            </Typography>
            <Typography variant="body2" gutterBottom>
              The purposes for which we use Personal Data are as follows:
            </Typography>
            <Typography variant="body2" gutterBottom>
              <ol>
                <li>
                  To provide consultation advice and respond to inquiries. For
                  this, we use basic and client service data, transaction, and
                  device data.
                </li>
                <li>
                  To provide consultation advice and respond to inquiries. For
                  this, we use basic and client service data, transaction, and
                  device data.
                </li>
                <li>
                  To provide consultation advice and respond to inquiries. For
                  this, we use basic and client service data, transaction, and
                  device data.
                </li>
                <li>
                  To protect the security and effective functioning of our
                  website and information technology systems. For this, we use
                  basic and client service data, registration data, transaction
                  data, and device data. It is necessary for our legitimate
                  interests to monitor how our website is used to detect and
                  prevent fraud, other crimes and the misuse of our website.
                  This helps us to ensure that you can safely use our website.
                </li>
                <li>
                  To provide relevant marketing, such as providing you with
                  information about events or services that may be of interest
                  to you including services, updates, client conferences or
                  networking events, and groups of specific interest. For this,
                  we use registration and marketing data, basic and client
                  service data, as well as device data. It is necessary for our
                  legitimate interests to process this information in order to
                  provide you with tailored and relevant marketing, updates and
                  invitations.
                </li>
                <li>
                  To address compliance and legal obligations, such as complying
                  with the Firm’s reporting obligations, checking the identity
                  of new clients and to prevent money laundering and/or fraud.
                  For this, we use compliance data, basic and client service
                  data, registration data, transaction data, and device data.
                </li>
                <li>
                  To consider individuals for employment and contractor
                  opportunities and manage on-boarding procedures. For this, we
                  use job applicant data and compliance data. The processing is
                  necessary for the purposes of recruitment and on-boarding and
                  for complying with legal obligations to which we are subject,
                  and which may be subject to a relevant local recruitment
                  privacy policy.
                </li>
              </ol>
            </Typography>
            <Typography variant="body2" gutterBottom>
              If you submit personal information for publication on our website,
              we will publish and otherwise use that information in accordance
              with the permission given to us.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Your privacy settings can be used to limit the publication of your
              information on our website and can be adjusted using privacy
              controls on the website.
            </Typography>
            <Typography variant="body2" gutterBottom>
              We will not, without your express consent, supply your personal
              information to any third party for the purpose of their or any
              other third party’s direct marketing.
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              Sharing of Personal Data
            </Typography>
            <Typography variant="body2" gutterBottom>
              We may share Personal Data with the following categories and
              recipients:
            </Typography>
            <Typography variant="body2" gutterBottom>
              <ol>
                <li>
                  Affiliates and Service Providers: If requested and/or approved
                  by the client or prospective client, we will share personal
                  data with our trusted affiliate companies and service
                  providers in order to provide you with adequate services in
                  relation to our business and those of our affiliates and
                  service providers.
                </li>
                <li>
                  Financial institutions: We may share Personal Data with
                  financial institutions in connection with invoicing and
                  payments.
                </li>
                <li>
                  Mandatory disclosures and Legal Claims: We share Personal Data
                  in order to comply with the Company’s tax reporting
                  obligations, comply with any subpoena, court order or other
                  legal process, to comply with a request from regulators,
                  governmental request or any other legally enforceable demand.
                  We also share Personal Data to establish or protect our legal
                  rights, property, or safety, or the rights, property, or
                  safety of others, or to defend against legal claims.
                </li>
              </ol>
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              Cookies Policy{" "}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Our website uses cookies to optimize user experience.
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              What are cookies?{" "}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Cookies are small amounts of data that are stored on your browser,
              device, or the page you are viewing. Some cookies are deleted once
              you close your browser, while other cookies are retained even
              after you close your browser so that you can be recognized when
              you return to a website.
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              How do we use cookies?{" "}
            </Typography>
            <Typography variant="body2" gutterBottom>
              We use cookies in order to gather information about your usage
              patterns when you navigate the Site in order to enhance your
              personalized experience, and to understand usage patterns to
              improve our Site’s services.
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              Categories of cookies on our Site:{" "}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <ol>
                <li>
                  <b>Analytical/Performance Cookies:</b> These allow us to
                  recognize and count the number of users of our Site and
                  understand how such users navigate through our Site. This
                  helps to improve how our Site works, for example, by ensuring
                  that users can find what they are looking for easily. These
                  cookies are session cookies which are erased when you close
                  your browser.
                </li>
                <li>
                  <b>Functional Cookies: </b> These improve the functional
                  performance of our website and make it easier for you to use.
                  For example, cookies are used to remember that you have
                  previously visited the website and asked to remain logged into
                  it. These cookies qualify as persistent cookies, because they
                  remain on your device for us to use during a next visit to our
                  website. You can delete these cookies via your browser
                  settings.
                </li>
                <li>
                  <b>Cookie Pop Up </b> We use a cookie to determine if you have
                  read our cookies consent pop up and to ensure we do not show
                  it to you again when you dismiss it.
                </li>
              </ol>
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              What are your options if you do not want cookies on your computer?{" "}
            </Typography>
            <Typography variant="body2" gutterBottom>
              You can review your Internet browser settings, typically under the
              sections “Help” or “Internet Options,” to exercise choices you
              have for certain Cookies. If you disable or delete certain Cookies
              in your Internet browser settings, you might not be able to access
              or use important functions or features of this Site.
            </Typography>
            <Typography
              variant="subititle2"
              gutterBottom
              style={{
                fontFamily: "PoppinsBold",
                color: "#134611",
              }}
            >
              Terms of Use
            </Typography>
            <Typography variant="body2" gutterBottom>
              By accessing this site, you agree to the following terms and
              conditions:
            </Typography>
            <Typography variant="body2" gutterBottom>
              ByahengCSTC ( “Site”) maintains this Site to provide you with
              information about its services and to facilitate communication
              with its affiliate companies and service providers.
            </Typography>
            <Typography variant="body2" gutterBottom>
              The ByahengCSTC requires all visitors to the Site to adhere to the
              following rules and regulations:
            </Typography>
            <Typography variant="body2" gutterBottom>
              <ul>
                <li>
                  The ByahengCSTC requires all visitors to the Site to adhere to
                  the following rules and regulations:
                </li>
                <li>
                  The Company owns the text and images appearing on this Site or
                  others as indicated.
                </li>
                <li>
                  Not all the services described on the site are available in
                  all geographic areas of the Philippines.
                </li>
              </ul>
            </Typography>
            <Typography variant="body2" gutterBottom>
              We will use our best efforts to include accurate and up to date
              information on the Site, but we make no warranties or
              representations as to the accuracy of the information. You agree
              that all access and use of the Site and its contents is at your
              own risk. By using the Site, you acknowledge that we specifically
              disclaim any liability for any damages arising out of or in any
              way connected with your access to our use of the Site. You agree
              that your use of this Site shall be governed by Philippine laws
              and.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
            style={{ fontFamily: "PoppinsBold" }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

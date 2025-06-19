// import {
//     Body,
//     Container,
//     Column,
//     Head,
//     Hr,
//     Html,
//     Preview,
//     Row,
//     Section,
//     Text,
//     Heading,
//     Button,
// } from '@react-email/components';

// interface OrderDetails {
//     orderNumber: string;
//     userName: string;
//     userEmail: string;
//     material: string;
//     quality: string;
//     color: string;
//     infill: string;
//     quantity: string;
//     volume: string;
//     totalPrice: string;
//     message: string;
//     fileName: string;
// }

// export const CustomerOrderEmail = ({
//     orderNumber,
//     userName,
//     material,
//     quality,
//     color,
//     infill,
//     quantity,
//     totalPrice,
//     fileName,
// }: OrderDetails) => {
//     const websiteUrl = 'https://treideee.ro';

//     return (
//         <Html>
//             <Head />
//             <Preview>Your 3D Print Order Confirmation: {orderNumber}</Preview>
//             <Body style={main}>
//                 <Container style={container}>
//                     <Section style={logoContainer}>
//                         {/* Replace with your logo */}
//                         <Text style={logoText}>Your 3D Printing Service</Text>
//                     </Section>

//                     <Section style={section}>
//                         <Heading as="h1" style={heading}>Thanks for your order, {userName}!</Heading>
//                         <Text style={paragraph}>
//                             We've received your 3D printing order and are reviewing it now.
//                             We'll start processing it as soon as possible.
//                         </Text>
//                         <Text style={orderNumberStyle}>Order #{orderNumber}</Text>
//                     </Section>

//                     <Hr style={hr} />

//                     <Section style={section}>
//                         <Heading as="h2" style={subheading}>Order Summary</Heading>

//                         <Row style={summaryRow}>
//                             <Column>
//                                 <Text style={label}>Model:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{fileName}</Text>
//                             </Column>
//                         </Row>

//                         <Row style={summaryRow}>
//                             <Column>
//                                 <Text style={label}>Material:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{material}</Text>
//                             </Column>
//                         </Row>

//                         <Row style={summaryRow}>
//                             <Column>
//                                 <Text style={label}>Quality:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{quality}</Text>
//                             </Column>
//                         </Row>

//                         <Row style={summaryRow}>
//                             <Column>
//                                 <Text style={label}>Color:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{color}</Text>
//                             </Column>
//                         </Row>

//                         <Row style={summaryRow}>
//                             <Column>
//                                 <Text style={label}>Infill:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{infill}</Text>
//                             </Column>
//                         </Row>

//                         <Row style={summaryRow}>
//                             <Column>
//                                 <Text style={label}>Quantity:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{quantity}</Text>
//                             </Column>
//                         </Row>
//                     </Section>

//                     <Section style={priceContainer}>
//                         <Row>
//                             <Column>
//                                 <Text style={priceLabel}>Total:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={priceValue}>{totalPrice}</Text>
//                             </Column>
//                         </Row>
//                     </Section>

//                     <Hr style={hr} />

//                     <Section style={section}>
//                         <Text style={paragraph}>
//                             We'll contact you once your order is ready. If you have any questions, simply reply to this email.
//                         </Text>

//                         <Section style={ctaContainer}>
//                             <Button href={`${websiteUrl}/orders/${orderNumber}`} style={ctaButton}>
//                                 View Order Status
//                             </Button>
//                         </Section>
//                     </Section>

//                     <Hr style={hr} />

//                     <Section style={footer}>
//                         <Text style={footerText}>
//                             © {new Date().getFullYear()} Your 3D Printing Service. All rights reserved.
//                         </Text>
//                         <Text style={footerText}>
//                             123 Printing Street, Your City, 12345
//                         </Text>
//                     </Section>
//                 </Container>
//             </Body>
//         </Html>
//     );
// };

// // Styles
// const main = {
//     backgroundColor: '#f6f9fc',
//     fontFamily: 'Arial, sans-serif',
// };

// const container = {
//     backgroundColor: '#ffffff',
//     margin: '0 auto',
//     padding: '20px 0',
//     maxWidth: '600px',
// };

// const logoContainer = {
//     padding: '20px 24px',
//     textAlign: 'center' as const,
// };

// const logoText = {
//     fontSize: '24px',
//     fontWeight: 'bold' as const,
//     color: '#4f46e5',
// };

// const section = {
//     padding: '0 24px',
// };

// const heading = {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#1d2939',
//     margin: '16px 0',
// };

// const paragraph = {
//     fontSize: '16px',
//     lineHeight: '24px',
//     color: '#4b5563',
// };

// const hr = {
//     borderColor: '#e6ebf1',
//     margin: '20px 0',
// };

// const subheading = {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     color: '#1d2939',
//     margin: '16px 0',
// };

// const summaryRow = {
//     margin: '8px 0',
// };

// const label = {
//     fontSize: '14px',
//     color: '#667085',
// };

// const value = {
//     fontSize: '14px',
//     color: '#1d2939',
// };

// const priceContainer = {
//     padding: '12px 24px',
//     backgroundColor: '#f9fafb',
//     margin: '16px 24px',
//     borderRadius: '4px',
// };

// const priceLabel = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#1d2939',
// };

// const priceValue = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#4f46e5',
// };

// const orderNumberStyle = {
//     fontSize: '16px',
//     color: '#667085',
// };

// const ctaContainer = {
//     padding: '24px 0',
//     textAlign: 'center' as const,
// };

// const ctaButton = {
//     backgroundColor: '#4f46e5',
//     borderRadius: '4px',
//     color: '#ffffff',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//     textAlign: 'center' as const,
//     padding: '12px 24px',
// };

// const footer = {
//     padding: '0 24px 24px',
//     textAlign: 'center' as const,
// };

// const footerText = {
//     fontSize: '12px',
//     color: '#667085',
//     margin: '4px 0',
// };

// export default CustomerOrderEmail;

import {
    Body,
    Container,
    Column,
    Head,
    Hr,
    Html,
    Preview,
    Row,
    Section,
    Text,
    Heading,
    Button,
} from '@react-email/components';

interface CustomerOrderDetails {
    orderNumber: string;
    userName: string;
    userEmail: string;
    orderDate: string;
    fileName: string;
    material: string;
    quality: string;
    color: string;
    infill: string;
    quantity: string;
    volume?: string;
    basePrice: string;
    infillAdjustment: string;
    totalPrice: string;
    message?: string;
}

export const CustomerOrderEmail = ({
    orderNumber,
    userName,
    orderDate,
    fileName,
    material,
    quality,
    color,
    infill,
    quantity,
    volume,
    basePrice,
    infillAdjustment,
    totalPrice,
    message,
}: CustomerOrderDetails) => {
    const websiteUrl = 'https://treideee.ro';

    return (
        <Html>
            <Head />
            <Preview>Your 3D Print Order Confirmation: {orderNumber}</Preview>
            <Body style={main}>
                <Container style={container}>

                    {/* Header */}
                    <Section style={logoContainer}>
                        <Text style={logoText}>Treidee(e)</Text>
                        <Text style={tagline}>Manufacturing made simple.</Text>
                    </Section>

                    {/* Welcome Section */}
                    <Section style={section}>
                        <Heading as="h1" style={heading}>Thanks for your order, {userName}!</Heading>
                        <Text style={paragraph}>
                            We've received your 3D printing request and will begin processing it shortly.
                            Your high-quality print will be delivered at your doorstep.
                        </Text>
                        <Text style={orderNumberStyle}>Order {orderNumber}</Text>
                        <Text style={dateStyle}>{orderDate}</Text>
                    </Section>

                    <Hr style={hr} />

                    {/* Order Details */}
                    <Section style={section}>
                        <Heading as="h2" style={subheading}>Order Details</Heading>

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Model File:</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{fileName}</Text>
                            </Column>
                        </Row>

                        {volume && (
                            <Row style={summaryRow}>
                                <Column>
                                    <Text style={label}>Volume:</Text>
                                </Column>
                                <Column>
                                    <Text style={value}>{volume}</Text>
                                </Column>
                            </Row>
                        )}
                    </Section>

                    <Hr style={hr} />

                    {/* Print Settings */}
                    <Section style={section}>
                        <Heading as="h2" style={subheading}>Print Settings</Heading>

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Material:</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{material}</Text>
                            </Column>
                        </Row>

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Quality:</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{quality}</Text>
                            </Column>
                        </Row>

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Color:</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{color}</Text>
                            </Column>
                        </Row>

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Infill (Strength):</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{infill}</Text>
                            </Column>
                        </Row>

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Quantity:</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{quantity}</Text>
                            </Column>
                        </Row>
                    </Section>

                    {/* Price Breakdown */}
                    <Section style={priceBreakdownContainer}>
                        <Heading as="h2" style={subheading}>Price Breakdown</Heading>

                        <Row style={priceRow}>
                            <Column>
                                <Text style={priceLabel}>Base Price:</Text>
                            </Column>
                            <Column>
                                <Text style={priceValue}>{basePrice} RON</Text>
                            </Column>
                        </Row>

                        <Row style={priceRow}>
                            <Column>
                                <Text style={priceLabel}>Infill Adjustment:</Text>
                            </Column>
                            <Column>
                                <Text style={priceValue}>{infillAdjustment} RON</Text>
                            </Column>
                        </Row>

                        <Hr style={priceDivider} />

                        <Row style={totalPriceContainer}>
                            <Column>
                                <Text style={totalPriceLabel}>Total:</Text>
                            </Column>
                            <Column>
                                <Text style={totalPriceValue}>{totalPrice} RON</Text>
                            </Column>
                        </Row>
                    </Section>

                    {/* Order Message */}
                    {message && (
                        <>
                            <Hr style={hr} />
                            <Section style={section}>
                                <Heading as="h2" style={subheading}>Order Message</Heading>
                                <Text style={messageText}>{message}</Text>
                            </Section>
                        </>
                    )}

                    <Hr style={hr} />

                    {/* Next Steps */}
                    <Section style={section}>
                        <Heading as="h2" style={subheading}>What's Next?</Heading>
                        <Text style={paragraph}>
                            • We'll review your 3D model and print settings<br />
                            • Your print will be queued for production<br />
                            • You'll receive updates on the printing progress<br />
                            • Your finished print will be delivered to your doorstep
                        </Text>

                        {/* <Section style={ctaContainer}>
                            <Button href={`${websiteUrl}/orders/${orderNumber}`} style={ctaButton}>
                                Track Your Order
                            </Button>
                        </Section> */}
                        {/*TODO: buton track order cand am toata baza de date si tot gata*/}
                    </Section>

                    <Hr style={hr} />

                    {/* Support Section */}
                    <Section style={section}>
                        <Text style={paragraph}>
                            Have questions about your order? Our expert assistance is available around the clock for your projects.
                        </Text>
                        <Text style={supportText}>
                            Simply reply to this email or contact us at support@treideee.ro
                        </Text>
                    </Section>

                    <Hr style={hr} />

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            © {new Date().getFullYear()} Treidee(e). Manufacturing made simple.
                        </Text>
                        <Text style={footerText}>
                            This email was sent regarding your 3D printing order. If you have any concerns, please contact our support team.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0',
    maxWidth: '600px',
    borderRadius: '8px',
};

const logoContainer = {
    padding: '20px 24px',
    textAlign: 'center' as const,
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #e9ecef',
};

const logoText = {
    fontSize: '28px',
    fontWeight: '600' as const,
    color: '#0D9488',
    margin: '0',
};

const tagline = {
    fontSize: '14px',
    color: '#666666',
    margin: '5px 0 0 0',
};

const section = {
    padding: '0 24px',
};

const heading = {
    fontSize: '24px',
    fontWeight: '600' as const,
    color: '#333333',
    margin: '16px 0',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#666666',
    margin: '16px 0',
};

const hr = {
    borderColor: '#e9ecef',
    margin: '20px 24px',
};

const subheading = {
    fontSize: '18px',
    fontWeight: '600' as const,
    color: '#333333',
    margin: '16px 0',
};

const summaryRow = {
    margin: '12px 0',
};

const label = {
    fontSize: '14px',
    color: '#333333',
    fontWeight: '600' as const,
    margin: '0',
};

const value = {
    fontSize: '14px',
    color: '#666666',
    margin: '0',
    textAlign: 'right' as const,
};

const priceBreakdownContainer = {
    padding: '0 24px',
    backgroundColor: '#f0fdf4',
    margin: '16px 24px',
    borderRadius: '8px',
    border: '1px solid #bbf7d0',
};

const priceRow = {
    margin: '8px 0',
};

const priceLabel = {
    fontSize: '14px',
    color: '#666666',
    margin: '0',
};

const priceValue = {
    fontSize: '14px',
    color: '#666666',
    margin: '0',
    textAlign: 'right' as const,
};

const priceDivider = {
    borderColor: '#d1d5db',
    margin: '15px 0',
};

const totalPriceContainer = {
    margin: '12px 0',
};

const totalPriceLabel = {
    fontSize: '16px',
    fontWeight: '600' as const,
    color: '#333333',
    margin: '0',
};

const totalPriceValue = {
    fontSize: '16px',
    fontWeight: '600' as const,
    color: '#16a34a',
    margin: '0',
    textAlign: 'right' as const,
};

const orderNumberStyle = {
    fontSize: '18px',
    color: '#333333',
    fontWeight: '600' as const,
    margin: '8px 0 4px 0',
};

const dateStyle = {
    fontSize: '14px',
    color: '#666666',
    margin: '0',
};

const messageText = {
    fontSize: '14px',
    color: '#666666',
    fontStyle: 'italic' as const,
    lineHeight: '22px',
    backgroundColor: '#f8f9fa',
    padding: '16px',
    borderRadius: '4px',
    border: '1px solid #e9ecef',
};

const ctaContainer = {
    padding: '24px 0',
    textAlign: 'center' as const,
};

const ctaButton = {
    backgroundColor: '#0D9488',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600' as const,
    textDecoration: 'none',
    textAlign: 'center' as const,
    padding: '12px 24px',
    display: 'inline-block',
};

const supportText = {
    fontSize: '14px',
    color: '#666666',
    fontWeight: '500' as const,
};

const footer = {
    padding: '0 24px 24px',
    textAlign: 'center' as const,
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #e9ecef',
};

const footerText = {
    fontSize: '12px',
    color: '#999999',
    margin: '8px 0',
    lineHeight: '18px',
};

export default CustomerOrderEmail;
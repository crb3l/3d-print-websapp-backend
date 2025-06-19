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
// } from '@react-email/components';

// interface OrderDetails {
//     orderNumber: string;
//     userName: string;
//     userEmail: string;
//     userAddress: string;
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

// export const AdminOrderEmail = ({
//     orderNumber,
//     userName,
//     userEmail,
//     userAddress,
//     material,
//     quality,
//     color,
//     infill,
//     quantity,
//     volume,
//     totalPrice,
//     message,
//     fileName,
// }: OrderDetails) => {
//     return (
//         <Html>
//             <Head />
//             <Preview>New 3D Print Order: {orderNumber}</Preview>
//             <Body style={main}>
//                 <Container style={container}>
//                     <Section>
//                         <Heading as="h1">New 3D Print Order</Heading>
//                         <Text style={orderNumberStyle}>Order #{orderNumber}</Text>
//                     </Section>

//                     <Section style={section}>
//                         <Heading as="h2" style={subheading}>Customer Details</Heading>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>Name:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{userName}</Text>
//                             </Column>
//                         </Row>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>Address:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{userAddress}</Text>
//                             </Column>
//                         </Row>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>Email:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{userEmail}</Text>
//                             </Column>
//                         </Row>
//                     </Section>

//                     <Hr style={hr} />

//                     <Section style={section}>
//                         <Heading as="h2" style={subheading}>Order Specifications</Heading>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>Material:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{material}</Text>
//                             </Column>
//                         </Row>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>Quality:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{quality}</Text>
//                             </Column>
//                         </Row>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>Color:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{color}</Text>
//                             </Column>
//                         </Row>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>Infill:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{infill}</Text>
//                             </Column>
//                         </Row>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>Quantity:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{quantity}</Text>
//                             </Column>
//                         </Row>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>Model Volume:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{volume}</Text>
//                             </Column>
//                         </Row>
//                         <Row>
//                             <Column>
//                                 <Text style={label}>File name:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={value}>{fileName}</Text>
//                             </Column>
//                         </Row>
//                     </Section>

//                     <Hr style={hr} />

//                     <Section style={section}>
//                         <Heading as="h2" style={subheading}>Price</Heading>
//                         <Row>
//                             <Column>
//                                 <Text style={labelTotal}>Total:</Text>
//                             </Column>
//                             <Column>
//                                 <Text style={total}>{totalPrice}</Text>
//                             </Column>
//                         </Row>
//                     </Section>

//                     <Hr style={hr} />

//                     <Section style={section}>
//                         <Heading as="h2" style={subheading}>Additional Message</Heading>
//                         <Text style={messageStyle}>{message}</Text>
//                     </Section>

//                     <Hr style={hr} />

//                     <Section style={footer}>
//                         <Text style={footerText}>
//                             This email contains an STL file attachment. Please check the admin dashboard for more details or reply to this email to contact the customer directly.
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

// const section = {
//     padding: '0 24px',
// };

// const hr = {
//     borderColor: '#e6ebf1',
//     margin: '20px 0',
// };

// const subheading = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#333',
//     margin: '16px 0',
// };

// const label = {
//     fontSize: '14px',
//     color: '#667085',
//     margin: '8px 0',
// };

// const value = {
//     fontSize: '14px',
//     color: '#1d2939',
//     margin: '8px 0',
// };

// const labelTotal = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#667085',
//     margin: '8px 0',
// };

// const total = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#1d2939',
//     margin: '8px 0',
// };

// const orderNumberStyle = {
//     fontSize: '16px',
//     color: '#667085',
//     marginTop: '0',
// };

// const messageStyle = {
//     fontSize: '14px',
//     color: '#1d2939',
//     margin: '8px 0',
//     padding: '12px',
//     backgroundColor: '#f9fafb',
//     borderRadius: '4px',
// };

// const footer = {
//     padding: '0 24px',
//     textAlign: 'center' as const,
// };

// const footerText = {
//     fontSize: '12px',
//     color: '#667085',
// };

// export default AdminOrderEmail;

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

interface OrderDetails {
    orderNumber: string;
    userName: string;
    userEmail: string;
    userAddress: string;
    orderDate: string;
    material: string;
    quality: string;
    color: string;
    infill: string;
    quantity: string;
    volume: string;
    basePrice: string;
    infillAdjustment: string;
    totalPrice: string;
    message: string;
    fileName: string;
}

export const AdminOrderEmail = ({
    orderNumber,
    userName,
    userEmail,
    userAddress,
    orderDate,
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
    fileName,
}: OrderDetails) => {
    const adminUrl = 'https://admin.treideee.ro';

    return (
        <Html>
            <Head />
            <Preview>New 3D Print Order: {orderNumber}</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={logoContainer}>
                        <Text style={logoText}>Treidee(e) Admin</Text>
                        <Text style={tagline}>New order notification</Text>
                    </Section>

                    {/* Alert Section */}
                    <Section style={alertSection}>
                        <Text style={alertText}>🔔 New Order Received</Text>
                        <Text style={orderNumberStyle}>Order {orderNumber}</Text>
                        <Text style={dateStyle}>{orderDate}</Text>
                    </Section>

                    <Hr style={hr} />

                    {/* Customer Information */}
                    <Section style={section}>
                        <Heading as="h2" style={subheading}>Customer Information</Heading>

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Name:</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{userName}</Text>
                            </Column>
                        </Row>

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Email:</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{userEmail}</Text>
                            </Column>
                        </Row>

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Address:</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{userAddress}</Text>
                            </Column>
                        </Row>
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

                        <Row style={summaryRow}>
                            <Column>
                                <Text style={label}>Volume:</Text>
                            </Column>
                            <Column>
                                <Text style={value}>{volume}</Text>
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

                    <Hr style={hr} />

                    {/* Print Specifications */}
                    <Section style={section}>
                        <Heading as="h2" style={subheading}>Print Specifications</Heading>

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

                    {/* Customer Message */}
                    {message && (
                        <>
                            <Hr style={hr} />
                            <Section style={section}>
                                <Heading as="h2" style={subheading}>Customer Message</Heading>
                                <Text style={messageText}>{message}</Text>
                            </Section>
                        </>
                    )}

                    <Hr style={hr} />

                    {/* Action Required */}
                    <Section style={section}>
                        <Heading as="h2" style={subheading}>Action Required</Heading>
                        <Text style={paragraph}>
                            • Review the 3D model file (STL attachment)<br />
                            • Verify print specifications and pricing<br />
                            • Check material availability<br />
                            • Update order status in the admin dashboard
                        </Text>

                        <Section style={ctaContainer}>
                            <Button href={`${adminUrl}/orders/${orderNumber}`} style={ctaButton}>
                                View in Admin Dashboard
                            </Button>
                        </Section>

                        <Section style={ctaContainer}>
                            <Button href={`mailto:${userEmail}?subject=Re: Order ${orderNumber}`} style={secondaryButton}>
                                Contact Customer
                            </Button>
                        </Section>
                    </Section>

                    <Hr style={hr} />

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            This email contains an STL file attachment. Please check the admin dashboard for complete order details.
                        </Text>
                        <Text style={footerText}>
                            © {new Date().getFullYear()} Treidee(e) Admin System
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
    color: '#dc2626',
    margin: '0',
};

const tagline = {
    fontSize: '14px',
    color: '#666666',
    margin: '5px 0 0 0',
};

const alertSection = {
    padding: '20px 24px',
    textAlign: 'center' as const,
    backgroundColor: '#fef3c7',
    border: '1px solid #f59e0b',
    margin: '0 24px',
    borderRadius: '8px',
};

const alertText = {
    fontSize: '18px',
    fontWeight: '600' as const,
    color: '#92400e',
    margin: '0 0 8px 0',
};

const section = {
    padding: '0 24px',
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
    backgroundColor: '#f0f9ff',
    margin: '16px 24px',
    borderRadius: '8px',
    border: '1px solid #93c5fd',
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
    color: '#2563eb',
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
    padding: '12px 0',
    textAlign: 'center' as const,
};

const ctaButton = {
    backgroundColor: '#dc2626',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600' as const,
    textDecoration: 'none',
    textAlign: 'center' as const,
    padding: '12px 24px',
    display: 'inline-block',
    margin: '4px',
};

const secondaryButton = {
    backgroundColor: '#6b7280',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600' as const,
    textDecoration: 'none',
    textAlign: 'center' as const,
    padding: '12px 24px',
    display: 'inline-block',
    margin: '4px',
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

export default AdminOrderEmail;
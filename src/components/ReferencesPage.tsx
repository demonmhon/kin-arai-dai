import React from 'react';
import {
  Container,
  Stack,
  Box,
  Title,
  Text,
  Button,
  SimpleGrid,
  Card,
  Badge,
  Group,
  ThemeIcon,
  Alert,
  Anchor,
  Paper,
  Divider,
} from '@mantine/core';
import {
  IconArrowLeft,
  IconExternalLink,
  IconShieldCheck,
  IconCheck,
  IconBuildingHospital,
  IconBook,
  IconSearch,
} from '@tabler/icons-react';
import { BookOpen } from 'lucide-react';

interface ReferencesPageProps {
  onNavigateHome: () => void;
  onNavigateCatalog: () => void;
}

export const ReferencesPage: React.FC<ReferencesPageProps> = ({
  onNavigateHome,
  onNavigateCatalog,
}) => {
  const sources = [
    {
      title: 'สมาคมโรคไตแห่งประเทศไทย (The Nephrology Society of Thailand)',
      category: 'สมาคมวิชาชีพทางการแพทย์',
      url: 'https://www.nephrothai.org/',
      topics: [
        'คำแนะนำการบริโภคอาหารและโภชนบำบัดสำหรับผู้ป่วยโรคไตเรื้อรัง',
        'ตารางการควบคุมแร่ธาตุ โพแทสเซียม ฟอสฟอรัส และโซเดียม',
        'ประกาศเตือนภัยทางการแพทย์กรณีสารพิษ Caramboxin ในมะเฟือง',
        'แนวทางเวชปฏิบัติสำหรับโรคไตเรื้อรังก่อนการบำบัดทดแทนไต',
      ],
      description:
        'องค์กรหลักด้านโรคไตของประเทศไทย เป็นแหล่งข้อมูลมาตรฐานในการอ้างอิงคำแนะนำทางเวชปฏิบัติและโภชนบำบัดสำหรับผู้ป่วยโรคไตทุกระยะในระบบสาธารณสุขไทย',
    },
    {
      title: 'ฝ่ายโภชนาการ คณะแพทยศาสตร์โรงพยาบาลรามาธิบดี มหาวิทยาลัยมหิดล (Rama Channel)',
      category: 'โรงพยาบาลมหาวิทยาลัยชั้นนำ',
      url: 'https://www.rama.mahidol.ac.th/ramachannel/',
      topics: [
        'ตารางแบ่งหมวดหมู่ผักและผลไม้ตามระดับโพแทสเซียม (ต่ำ / ปานกลาง / สูง)',
        'คำแนะนำปริมาณการบริโภคโปรตีนคุณภาพสูง (ไข่ขาว, เนื้อปลา)',
        'การเลือกเครื่องปรุงรสและการจำกัดปริมาณโซเดียมในอาหารไทย',
      ],
      description:
        'ศูนย์รวมความรู้ด้านโภชนบำบัดและการแพทย์เชิงปฏิบัติ ให้ข้อมูลที่เข้าใจง่ายสำหรับคนไข้และผู้ดูแลในชีวิตประจำวัน',
    },
    {
      title: 'สำนักโภชนาการ กรมอนามัย กระทรวงสาธารณสุข',
      category: 'หน่วยงานรัฐบาล',
      url: 'https://nutrition2.anamai.moph.go.th/',
      topics: [
        'ตารางแสดงคุณค่าทางโภชนาการของอาหารไทย (Food Composition Table of Thai Foods)',
        'ฐานข้อมูลปริมาณโซเดียม แคลเซียม และฟอสฟอรัสในวัตถุดิบและอาหารปรุงสำเร็จ',
      ],
      description:
        'ฐานข้อมูลผลการวิเคราะห์คุณค่าทางโภชนาการจากห้องปฏิบัติการของอาหารและวัตถุดิบท้องถิ่นในประเทศไทย',
    },
    {
      title: 'Kidney Disease: Improving Global Outcomes (KDIGO)',
      category: 'องค์กรสากลด้านโรคไต',
      url: 'https://kdigo.org/',
      topics: [
        'KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
        'เกณฑ์การจำแนกระยะโรคไต (Stages of CKD) ตามค่า eGFR',
        'หลักการควบคุมโปรตีนและเกลือแร่ในระดับสากล',
      ],
      description:
        'องค์กรระดับนานาชาติที่จัดทำแนวทางเวชปฏิบัติโรคไตที่เป็นมาตรฐานอ้างอิงของแพทย์โรคไตทั่วโลก',
    },
  ];

  return (
    <Box py={{ base: 'md', sm: 'xl' }}>
      <Container size="lg">
        <Stack gap="xl">
          {/* Top Breadcrumb & Navigation */}
          <Group justify="space-between" align="center">
            <Button
              variant="subtle"
              color="gray"
              size="xs"
              leftSection={<IconArrowLeft size={16} />}
              onClick={onNavigateHome}
            >
              กลับสู่หน้าหลัก (Home)
            </Button>

            <Button
              variant="light"
              color="emerald"
              size="xs"
              radius="xl"
              leftSection={<IconSearch size={14} />}
              onClick={onNavigateCatalog}
            >
              ค้นหาอาหารต่อ
            </Button>
          </Group>

          {/* Header Section */}
          <Box>
            <Badge
              size="md"
              color="emerald"
              variant="light"
              mb="xs"
              leftSection={<BookOpen size={13} />}
            >
              แหล่งข้อมูลและที่มาทางการแพทย์
            </Badge>
            <Title order={1} fz={{ base: 24, sm: 32 }} fw={800} c="slate.9" mb="xs">
              แหล่งข้อมูลอ้างอิง (Medical References & Sources)
            </Title>
            <Text size="sm" c="dimmed" style={{ maxWidth: 780 }} lh={1.7}>
              เว็บไซต์ "กินอะไรได้บ้าง" รวบรวมข้อมูลโภชนาการจากเอกสารทางการแพทย์ คู่มือเวชปฏิบัติ
              และงานวิจัยของสถาบันที่น่าเชื่อถือ เพื่อให้ข้อมูลประกอบการตัดสินใจเบื้องต้นที่โปร่งใสและตรวจสอบได้
            </Text>
          </Box>

          {/* Important Medical Clarification Alert */}
          <Alert
            icon={<IconShieldCheck size={22} />}
            color="emerald"
            variant="light"
            radius="lg"
            styles={{
              root: {
                backgroundColor: '#f0fdf4',
                borderColor: '#a7f3d0',
                borderWidth: 1.5,
              },
              message: {
                fontSize: 13,
                color: '#065f46',
                lineHeight: 1.7,
              },
            }}
          >
            <Text fw={700} size="sm" c="#065f46" mb={4}>
              ข้อจำกัดความรับผิดชอบและเจตนารมณ์ทางการแพทย์ (Medical Disclaimer)
            </Text>
            <Text size="xs" c="#047857" lh={1.7}>
              ผู้จัดทำเว็บไซต์นี้<strong>ไม่ใช่แพทย์หรือบุคลากรทางการแพทย์โดยตรง</strong> ข้อมูลทั้งหมดที่ปรากฏบนเว็บไซต์จัดทำขึ้นเพื่อ
              <strong>"รวบรวมข้อมูลโภชนาการให้เป็นประโยชน์และสะดวกต่อการค้นหาเบื้องต้นเท่านั้น ไม่ใช่การยืนยันหรือวินิจฉัยทางการแพทย์"</strong>
              <br />
              เนื่องจากสภาวะร่างกายของผู้ป่วยแต่ละท่านแตกต่างกัน มีโรคประจำตัวร่วม และมีผลตรวจเลือดเฉพาะบุคคล
              (เช่น ค่า eGFR, โพแทสเซียม, ฟอสฟอรัส, โซเดียม ในเลือด) ที่ไม่เท่ากัน
              <strong>โปรดปรึกษาแพทย์ประจำตัวหรือนักกำหนดอาหารวิชาชีพก่อนปรับเปลี่ยนพฤติกรรมการรับประทานอาหารเสมอ</strong>
            </Text>
          </Alert>

          {/* 4 Primary Medical Sources Grid */}
          <Box>
            <Title order={2} fz={{ base: 18, sm: 22 }} fw={700} c="slate.9" mb="md">
              สถาบันและแหล่งข้อมูลทางการแพทย์หลัก
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              {sources.map((src) => (
                <Card
                  key={src.title}
                  p="lg"
                  radius="xl"
                  withBorder
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Group justify="space-between" align="flex-start" mb="xs">
                      <ThemeIcon size={40} radius="md" color="emerald" variant="light">
                        <IconBuildingHospital size={22} />
                      </ThemeIcon>
                      <Badge size="xs" variant="light" color="gray">
                        {src.category}
                      </Badge>
                    </Group>

                    <Text fw={700} size="sm" c="slate.9" mb={4} lh={1.4}>
                      {src.title}
                    </Text>

                    <Text size="xs" c="dimmed" mb="md" lh={1.6}>
                      {src.description}
                    </Text>

                    <Text size="xs" fw={700} c="slate.8" mb={6}>
                      หัวข้อที่นำมาใช้อ้างอิงในระบบ:
                    </Text>

                    <Stack gap={4} mb="md">
                      {src.topics.map((topic) => (
                        <Group key={topic} gap={6} align="flex-start" wrap="nowrap">
                          <ThemeIcon size={16} radius="xl" color="emerald" variant="light" mt={2}>
                            <IconCheck size={10} />
                          </ThemeIcon>
                          <Text size="11px" c="slate.7" lh={1.4}>
                            {topic}
                          </Text>
                        </Group>
                      ))}
                    </Stack>
                  </Box>

                  <Box pt="xs" style={{ borderTop: '1px solid #f1f5f9' }}>
                    <Anchor
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="xs"
                      c="emerald.7"
                      fw={600}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
                    >
                      เยี่ยมชมเว็บไซต์ต้นทาง <IconExternalLink size={12} />
                    </Anchor>
                  </Box>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* Criteria & Quality Standards */}
          <Paper p="xl" radius="xl" withBorder style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
            <Title order={3} fz={{ base: 16, sm: 18 }} fw={700} c="slate.9" mb="xs">
              เกณฑ์การคัดกรองข้อมูลของ "กินอะไรได้บ้าง"
            </Title>
            <Text size="xs" c="dimmed" lh={1.7} mb="md">
              เพื่อให้ข้อมูลมีความปลอดภัยสูงสุดต่อสุขภาพของผู้ใช้งาน เรายึดถือมาตรฐานดังต่อไปนี้:
            </Text>

            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
              <Box>
                <Group gap={6} mb={4}>
                  <ThemeIcon size={24} radius="xl" color="emerald" variant="light">
                    <IconBook size={14} />
                  </ThemeIcon>
                  <Text size="xs" fw={700} c="slate.8">
                    1. ต้องมีเหตุผลกำกับ
                  </Text>
                </Group>
                <Text size="11px" c="dimmed" lh={1.5}>
                  ทุกรายการอาหารในฐานข้อมูลจะต้องระบุสารอาหารหลักที่เกี่ยวข้อง (เช่น โพแทสเซียม, ฟอสฟอรัส, สารพิษเฉพาะ) ว่าส่งผลต่อไตอย่างไร
                </Text>
              </Box>

              <Box>
                <Group gap={6} mb={4}>
                  <ThemeIcon size={24} radius="xl" color="emerald" variant="light">
                    <IconBook size={14} />
                  </ThemeIcon>
                  <Text size="xs" fw={700} c="slate.8">
                    2. ไม่แน่ใจ ไม่แสดงข้อมูล
                  </Text>
                </Group>
                <Text size="11px" c="dimmed" lh={1.5}>
                  หากอาหารชนิดใดยังไม่มีรายงานทางการแพทย์หรือผลแล็บที่แน่ชัด เราจะไม่คาดเดาข้อมูล และจะระบุสถานะว่าไม่มีข้อมูลยืนยัน
                </Text>
              </Box>

              <Box>
                <Group gap={6} mb={4}>
                  <ThemeIcon size={24} radius="xl" color="emerald" variant="light">
                    <IconBook size={14} />
                  </ThemeIcon>
                  <Text size="xs" fw={700} c="slate.8">
                    3. ตรวจสอบลิงก์ที่มาได้
                  </Text>
                </Group>
                <Text size="11px" c="dimmed" lh={1.5}>
                  เมื่อผู้ใช้กดดูรายละเอียดของอาหารแต่ละชนิด จะมีลิงก์ไปยังแหล่งข้อมูลอ้างอิงต้นทาง เพื่อให้ผู้ใช้สามารถตรวจสอบความถูกต้องได้ตลอดเวลา
                </Text>
              </Box>
            </SimpleGrid>
          </Paper>

          {/* Bottom Actions */}
          <Divider color="#f1f5f9" />
          <Group justify="center" gap="md" py="xs">
            <Button
              variant="default"
              radius="xl"
              size="sm"
              onClick={onNavigateHome}
              leftSection={<IconArrowLeft size={16} />}
            >
              กลับสู่หน้าหลัก
            </Button>
            <Button
              variant="filled"
              color="emerald"
              radius="xl"
              size="sm"
              onClick={onNavigateCatalog}
              rightSection={<IconSearch size={16} />}
            >
              ค้นหารายการอาหาร
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};

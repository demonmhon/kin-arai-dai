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
  Paper,
} from '@mantine/core';
import {
  IconBolt,
  IconTrafficLights,
  IconStethoscope,
  IconShieldCheck,
  IconArrowRight,
  IconCheck,
  IconAlertTriangle,
} from '@tabler/icons-react';
import { KidneyStageId, GoutStageId } from '../types/food';
import { diseases } from '../data/diseases';

interface LandingPageProps {
  onSelectCkdStage: (stage: KidneyStageId) => void;
  onSelectGoutStage?: (stage: GoutStageId) => void;
  onOpenStageModal: () => void;
  onOpenGuideModal: () => void;
  onNavigateReferences?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onSelectCkdStage,
  onSelectGoutStage,
  onOpenStageModal,
  onOpenGuideModal,
  onNavigateReferences,
}) => {
  const ckdStages = [
    { id: 'stage1_2' as KidneyStageId, name: 'ระยะ 1 - 2', desc: 'ไตเริ่มเสื่อมเล็กน้อย ทานได้หลากหลาย คุมเค็มและน้ำตาล' },
    { id: 'stage3' as KidneyStageId, name: 'ระยะ 3 (3a - 3b)', desc: 'ไตเสื่อมปานกลาง เริ่มคุมโปรตีน โซเดียม และเฝ้าระวังแร่ธาตุ' },
    { id: 'stage4_5_pre' as KidneyStageId, name: 'ระยะ 4 - 5 (ก่อนฟอกไต)', desc: 'ไตเสื่อมรุนแรง ต้องคุมโปรตีนเข้มงวด เลี่ยงโพแทสเซียมและฟอสฟอรัสสูง' },
    { id: 'dialysis' as KidneyStageId, name: 'ฟอกเลือด / ล้างไต', desc: 'ต้องเพิ่มโปรตีนคุณภาพสูงเพื่อชดเชย คุมน้ำดื่มและฟอสฟอรัสเข้มงวด' },
  ];

  return (
    <Box py={{ base: 'md', sm: 'xl' }}>
      <Container size="lg">
        <Stack gap={40}>
          {/* 1. Hero Intention Section */}
          <Paper
            p={{ base: 'lg', sm: 40 }}
            radius={28}
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #064e3b 100%)',
              color: '#ffffff',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.2)',
            }}
          >
            {/* Ambient decorative blur circle */}
            <Box
              style={{
                position: 'absolute',
                right: -40,
                bottom: -40,
                width: 300,
                height: 300,
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.18)',
                filter: 'blur(70px)',
                pointerEvents: 'none',
              }}
            />

            <Box style={{ position: 'relative', zIndex: 1, maxWidth: 760 }}>
              <Badge
                variant="light"
                color="emerald"
                size="md"
                radius="xl"
                mb="md"
                styles={{
                  root: {
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    color: '#6ee7b7',
                    border: '1px solid rgba(110, 231, 183, 0.35)',
                    fontWeight: 600,
                    textTransform: 'none',
                    padding: '6px 14px',
                  },
                }}
              >
                💡 เจตนารมณ์ของ "กินอะไรได้บ้าง"
              </Badge>

              <Title
                order={1}
                fz={{ base: 26, sm: 38 }}
                fw={800}
                c="white"
                lh={1.25}
                mb="md"
              >
                เพราะคนเราต้องกินข้าว <Text span c="#6ee7b7">วันละ 3 เวลาทุกวัน</Text>
                <br />
                สงสัยว่ากินได้ไหม... เช็กได้ทันที
              </Title>

              <Text size="sm" c="#cbd5e1" fw={300} lh={1.8} mb="xl">
                สำหรับผู้ป่วยโรคประจำตัวและคนดูแล ทุกมื้ออาหารมักเต็มไปด้วยความกังวลว่า{' '}
                <Text span c="white" fw={500}>"เมนูนี้กินได้ไหม?", "ผักจานนี้ปลอดภัยหรือเปล่า?"</Text>{' '}
                การค้นหาใน Search Engine หรือถาม AI ทั่วไป มักได้คำตอบกว้างๆ หรือข้อมูลที่ขัดแย้งกัน
                จนต้องเสียเวลา Fact-check ซ้ำๆ
                <br /><br />
                <Text span c="#6ee7b7" fw={600}>"กินอะไรได้บ้าง"</Text> ตั้งใจสร้างขึ้นมาเพื่อให้คุณเข้ามาเช็กได้ไวในไม่กี่วินาที
                ประเมินง่ายๆด้วยเกณฑ์ไฟจราจร <Text span c="#34d399">🟢 เขียว</Text>{' '}
                <Text span c="#fbbf24">🟡 เหลือง</Text>{' '}
                <Text span c="#f87171">🔴 แดง</Text>{' '}
                ที่แบ่งตรงตามระยะของโรคจริง พร้อมแหล่งอ้างอิงทางการแพทย์
              </Text>

              <Group gap="md" wrap="wrap">
                <Button
                  size="md"
                  color="emerald"
                  radius="xl"
                  rightSection={<IconArrowRight size={18} />}
                  onClick={onOpenStageModal}
                  styles={{
                    root: {
                      fontWeight: 700,
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
                    },
                  }}
                >
                  เลือกระยะโรคไต & เริ่มค้นหาอาหารทันที
                </Button>

                <Button
                  size="md"
                  variant="default"
                  radius="xl"
                  onClick={onOpenGuideModal}
                  styles={{
                    root: {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.25)',
                      color: '#ffffff',
                      fontWeight: 600,
                    },
                  }}
                >
                  ดูเกณฑ์โภชนาการไฟจราจร
                </Button>
              </Group>
            </Box>
          </Paper>

          {/* 2. Four Core Values Section */}
          <Box>
            <Box style={{ textAlign: 'center' }} mb="xl">
              <Text size="xs" fw={700} c="emerald.7" style={{ textTransform: 'uppercase' }} mb={4}>
                ฟีเจอร์
              </Text>
              <Title order={2} fz={{ base: 22, sm: 28 }} fw={700} c="slate.9">
                ออกแบบมาเพื่อความสะดวกในชีวิตประจำวัน
              </Title>
            </Box>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
              <Card p="lg" radius="xl" withBorder style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                <ThemeIcon size={44} radius="lg" color="emerald" variant="light" mb="md">
                  <IconBolt size={24} />
                </ThemeIcon>
                <Text fw={700} size="sm" c="slate.9" mb={4}>
                  เช็กไวในไม่กี่วินาที
                </Text>
                <Text size="xs" c="dimmed" lh={1.6}>
                  พิมพ์ชื่ออาหาร วัตถุดิบ หรือพิมพ์คำกว้างๆ เช่น "ผลไม้", "ไข่", "ปลา" ก็พบคำตอบทันท่วงทีก่อนลงมือทำอาหาร
                </Text>
              </Card>

              <Card p="lg" radius="xl" withBorder style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                <ThemeIcon size={44} radius="lg" color="teal" variant="light" mb="md">
                  <IconTrafficLights size={24} />
                </ThemeIcon>
                <Text fw={700} size="sm" c="slate.9" mb={4}>
                  เกณฑ์ไฟจราจร 3 สี
                </Text>
                <Text size="xs" c="dimmed" lh={1.6}>
                  เขียว (ทานได้), เหลือง (คุมปริมาณ), แดง (หลีกเลี่ยง) ชัดเจน ตรงไปตรงมา ไม่ต้องนั่งตีความผลแล็บซับซ้อน
                </Text>
              </Card>

              <Card p="lg" radius="xl" withBorder style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                <ThemeIcon size={44} radius="lg" color="blue" variant="light" mb="md">
                  <IconStethoscope size={24} />
                </ThemeIcon>
                <Text fw={700} size="sm" c="slate.9" mb={4}>
                  แบ่งตามระยะของโรค
                </Text>
                <Text size="xs" c="dimmed" lh={1.6}>
                  โรคไตระยะ 1 กับระยะ 4 มีเกณฑ์แร่ธาตุและโปรตีนต่างกันสิ้นเชิง เราจึงให้ข้อมูลปรับเกณฑ์
                </Text>
              </Card>

              <Card p="lg" radius="xl" withBorder style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
                <ThemeIcon size={44} radius="lg" color="indigo" variant="light" mb="md">
                  <IconShieldCheck size={24} />
                </ThemeIcon>
                <Text fw={700} size="sm" c="slate.9" mb={4}>
                  ข้อมูลการแพทย์ที่อ้างอิง
                </Text>
                <Text size="xs" c="dimmed" lh={1.6} mb="xs">
                  ไม่เดาข้อมูล รายการอาหารมีคำอธิบายเหตุผลและลิงก์อ้างอิง
                </Text>
                {onNavigateReferences && (
                  <Text
                    size="11px"
                    c="emerald.7"
                    fw={600}
                    style={{ cursor: 'pointer' }}
                    onClick={onNavigateReferences}
                  >
                    ดูแหล่งอ้างอิงทั้งหมด ➔
                  </Text>
                )}
              </Card>
            </SimpleGrid>
          </Box>

          {/* 3. Disease Selection CTA Section */}
          <Box id="disease-selection">
            <Box style={{ textAlign: 'center' }} mb="xl">
              <Badge size="sm" color="emerald" variant="light" mb={6}>
                เลือกโรคเพื่อเริ่มต้น
              </Badge>
              <Title order={2} fz={{ base: 22, sm: 28 }} fw={700} c="slate.9" mb={6}>
                เลือกอาการป่วยหรือโรคประจำตัวของคุณ
              </Title>
              <Text size="xs" c="dimmed">
                ตอนนี้ระบบเปิดให้บริการข้อมูลสำหรับ "โรคไตเรื้อรัง (CKD)" เต็มรูปแบบ และกำลังเตรียมข้อมูลสำหรับโรคอื่นๆ เพิ่มเติม
              </Text>
            </Box>

            {/* Active Disease Card: CKD */}
            <Card
              p={{ base: 'md', sm: 'xl' }}
              radius={24}
              withBorder
              style={{
                backgroundColor: '#ffffff',
                borderColor: '#10b981',
                borderWidth: 2,
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.1)',
              }}
              mb="lg"
            >
              <Group justify="space-between" align="flex-start" mb="md" wrap="wrap" gap="xs">
                <Group gap="sm">
                  <ThemeIcon size={48} radius="xl" color="emerald" variant="light" style={{ fontSize: 24 }}>
                    🩺
                  </ThemeIcon>
                  <Box>
                    <Group gap="xs">
                      <Title order={3} fz={{ base: 18, sm: 20 }} fw={700} c="slate.9">
                        โรคไตเรื้อรัง (Chronic Kidney Disease - CKD)
                      </Title>
                      <Badge size="sm" color="emerald" variant="filled">
                        พร้อมใช้งานทันที
                      </Badge>
                    </Group>
                    <Text size="xs" c="dimmed" mt={2}>
                      ครอบคลุมการควบคุมแร่ธาตุ 3 ตัวหลัก (โพแทสเซียม, ฟอสฟอรัส, โซเดียม) และปริมาณโปรตีนตามระยะของไต
                    </Text>
                  </Box>
                </Group>
              </Group>

              <Text size="xs" fw={700} c="slate.7" mb="xs">
                กรุณาเลือกระยะของโรคไตของคุณ เพื่อเข้าสู่หน้าค้นหาอาหาร:
              </Text>

              <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="sm" mb="md">
                {ckdStages.map((stage) => (
                  <Card
                    key={stage.id}
                    p="sm"
                    radius="lg"
                    withBorder
                    onClick={() => onSelectCkdStage(stage.id)}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: '#f8fafc',
                      borderColor: '#e2e8f0',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box mb="xs">
                      <Group justify="space-between" mb={4}>
                        <Text size="sm" fw={700} c="slate.9">
                          {stage.name}
                        </Text>
                        <ThemeIcon size={20} radius="xl" color="emerald" variant="light">
                          <IconCheck size={12} />
                        </ThemeIcon>
                      </Group>
                      <Text size="11px" c="dimmed" lh={1.4}>
                        {stage.desc}
                      </Text>
                    </Box>

                    <Button
                      size="compact-xs"
                      color="emerald"
                      variant="light"
                      radius="md"
                      fullWidth
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCkdStage(stage.id);
                      }}
                    >
                      เลือก {stage.name} ➔
                    </Button>
                  </Card>
                ))}
              </SimpleGrid>
            </Card>

            {/* Additional Diseases Grid */}
            <Text size="xs" fw={700} c="slate.6" mb="xs">
              โรคและอาการป่วยอื่นๆ ในระบบ:
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="sm">
              {diseases
                .filter((d) => d.id !== 'ckd')
                .map((d) => {
                  const isActive = d.status === 'active';
                  return (
                    <Card
                      key={d.id}
                      p="md"
                      radius="lg"
                      withBorder
                      onClick={() => {
                        if (isActive && d.id === 'gout' && onSelectGoutStage) {
                          onSelectGoutStage('gout_remission');
                        }
                      }}
                      style={{
                        backgroundColor: isActive ? '#ecfdf5' : '#f8fafc',
                        borderColor: isActive ? '#a7f3d0' : '#e2e8f0',
                        opacity: isActive ? 1 : 0.8,
                        cursor: isActive ? 'pointer' : 'default',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <Group justify="space-between" mb="xs">
                        <Text size="xl">{d.icon}</Text>
                        <Badge size="xs" color={isActive ? 'emerald' : 'gray'} variant={isActive ? 'filled' : 'light'}>
                          {d.badgeText}
                        </Badge>
                      </Group>
                      <Text size="xs" fw={700} c={isActive ? 'emerald.9' : 'slate.8'} mb={2}>
                        {d.name}
                      </Text>
                      <Text size="11px" c="dimmed" lineClamp={2} mb={isActive ? 'xs' : 0}>
                        {d.summary}
                      </Text>
                      {isActive && (
                        <Button
                          size="compact-xs"
                          color="emerald"
                          variant="light"
                          radius="md"
                          fullWidth
                          mt="xs"
                        >
                          เข้าดูเกณฑ์อาหาร ➔
                        </Button>
                      )}
                    </Card>
                  );
                })}
            </SimpleGrid>
          </Box>

          {/* 4. Concrete Examples Teaser Section */}
          <Paper p="xl" radius="xl" withBorder style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
            <Group justify="space-between" align="center" mb="md" wrap="wrap" gap="xs">
              <Box>
                <Text size="xs" fw={700} c="emerald.7" style={{ textTransform: 'uppercase' }}>
                  ตัวอย่างการประเมินอาหารจริง
                </Text>
                <Title order={3} fz={{ base: 18, sm: 20 }} fw={700} c="slate.9">
                  ทำไมระดับไฟจราจรจึงสำคัญกับชีวิตผู้ป่วย?
                </Title>
              </Box>
              <Button
                variant="subtle"
                color="emerald"
                size="xs"
                rightSection={<IconArrowRight size={14} />}
                onClick={() => onSelectCkdStage('stage4_5_pre')}
              >
                ดูฐานข้อมูลอาหารทั้งหมด ➔
              </Button>
            </Group>

            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
              {/* Example 1: Safe */}
              <Card p="md" radius="lg" withBorder style={{ backgroundColor: '#ecfdf5', borderColor: '#a7f3d0' }}>
                <Group justify="space-between" mb="xs">
                  <Badge size="sm" color="emerald" variant="filled">
                    🟢 ปลอดภัย (Safe)
                  </Badge>
                  <Text size="xs" c="dimmed">
                    ไข่ขาว
                  </Text>
                </Group>
                <Text fw={700} size="sm" c="slate.9" mb={4}>
                  ไข่ขาวต้ม / ไข่ขาวปรุงอาหาร
                </Text>
                <Text size="xs" c="slate.7" lh={1.5}>
                  โปรตีนคุณภาพสูง (High Biological Value) ของเสียน้อย ฟอสฟอรัสต่ำมาก เหมาะสำหรับผู้ป่วยไตทุกระยะ
                </Text>
              </Card>

              {/* Example 2: Caution */}
              <Card p="md" radius="lg" withBorder style={{ backgroundColor: '#fffbeb', borderColor: '#fde68a' }}>
                <Group justify="space-between" mb="xs">
                  <Badge size="sm" color="amber" variant="filled">
                    🟡 คุมปริมาณ (Caution)
                  </Badge>
                  <Text size="xs" c="dimmed">
                    มะละกอสุก
                  </Text>
                </Group>
                <Text fw={700} size="sm" c="slate.9" mb={4}>
                  มะละกอสุก (ทานครั้งละ 3-4 คำ)
                </Text>
                <Text size="xs" c="slate.7" lh={1.5}>
                  ช่วยระบบขับถ่าย แต่มีโพแทสเซียมปานกลาง ผู้ป่วยไตระยะ 1-3 ทานได้ แต่ระยะ 4-5 ต้องคุมปริมาณไม่เกิน 3-4 คำ
                </Text>
              </Card>

              {/* Example 3: Danger */}
              <Card p="md" radius="lg" withBorder style={{ backgroundColor: '#fef2f2', borderColor: '#fecaca' }}>
                <Group justify="space-between" mb="xs">
                  <Badge size="sm" color="red" variant="filled" leftSection={<IconAlertTriangle size={12} />}>
                    🔴 ห้ามเด็ดขาด (Danger)
                  </Badge>
                  <Text size="xs" c="dimmed">
                    มะเฟือง
                  </Text>
                </Group>
                <Text fw={700} size="sm" c="slate.9" mb={4}>
                  มะเฟือง / น้ำมะเฟือง
                </Text>
                <Text size="xs" c="slate.7" lh={1.5}>
                  มีสารพิษ Caramboxin ที่ไตเสื่อมไม่สามารถขับออกได้ ทำให้สะอึกรุนแรง ชัก ไตวายเฉียบพลัน และอันตรายถึงชีวิต
                </Text>
              </Card>
            </SimpleGrid>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

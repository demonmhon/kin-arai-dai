import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Text,
  Badge,
  Button,
  Stack,
  Paper,
  Group,
  SimpleGrid,
  ThemeIcon,
  Divider,
} from '@mantine/core';
import {
  Banana,
  Egg,
  Sparkles,
  Activity,
  AlertCircle,
  AlertTriangle,
  HeartPulse,
  Flame,
  Droplets,
  WineOff,
  CheckCircle2,
  Clock,
  Layers,
  Utensils,
  Check,
} from 'lucide-react';
import { kidneyStages } from '../data/kidneyStages';
import { goutStages } from '../data/goutStages';
import { cholecystectomyStages } from '../data/cholecystectomyStages';
import { getDiseaseLucideIcon } from '../utils/diseaseIcons';

interface EducationalModalProps {
  opened: boolean;
  onClose: () => void;
  selectedDiseaseId?: string;
  selectedStage?: string;
}

type TabType = 'ckd' | 'gout' | 'cholecystectomy';

export const EducationalModal: React.FC<EducationalModalProps> = ({
  opened,
  onClose,
  selectedDiseaseId = 'ckd',
  selectedStage,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('ckd');

  // Sync active tab whenever modal opens with current selected disease
  useEffect(() => {
    if (opened) {
      if (selectedDiseaseId === 'gout' || selectedDiseaseId === 'cholecystectomy') {
        setActiveTab(selectedDiseaseId);
      } else {
        setActiveTab('ckd');
      }
    }
  }, [opened, selectedDiseaseId]);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Box>
          <Badge size="xs" variant="light" color="emerald" mb={4}>
            คู่มือและเกณฑ์โภชนาการ
          </Badge>
          <Text fw={700} size="md" c="slate.9">
            เกณฑ์โภชนาการและหลักการเลือกอาหารตามภาวะสุขภาพ
          </Text>
        </Box>
      }
      size="lg"
      radius="xl"
      padding="lg"
      styles={{
        header: {
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: 12,
        },
      }}
    >
      <Stack gap="md" mt="xs">
        {/* Disease Switcher Tabs */}
        <Group gap="xs" wrap="wrap">
          <Button
            size="xs"
            radius="xl"
            variant={activeTab === 'ckd' ? 'filled' : 'default'}
            color="emerald"
            leftSection={getDiseaseLucideIcon('ckd', 14)}
            onClick={() => setActiveTab('ckd')}
            styles={{
              root: {
                fontWeight: 600,
                borderColor: activeTab === 'ckd' ? undefined : '#cbd5e1',
              },
            }}
          >
            โรคไตเรื้อรัง (CKD)
          </Button>

          <Button
            size="xs"
            radius="xl"
            variant={activeTab === 'gout' ? 'filled' : 'default'}
            color="emerald"
            leftSection={getDiseaseLucideIcon('gout', 14)}
            onClick={() => setActiveTab('gout')}
            styles={{
              root: {
                fontWeight: 600,
                borderColor: activeTab === 'gout' ? undefined : '#cbd5e1',
              },
            }}
          >
            โรคเกาต์ (Gout)
          </Button>

          <Button
            size="xs"
            radius="xl"
            variant={activeTab === 'cholecystectomy' ? 'filled' : 'default'}
            color="emerald"
            leftSection={getDiseaseLucideIcon('cholecystectomy', 14)}
            onClick={() => setActiveTab('cholecystectomy')}
            styles={{
              root: {
                fontWeight: 600,
                borderColor: activeTab === 'cholecystectomy' ? undefined : '#cbd5e1',
              },
            }}
          >
            ผู้ตัดถุงน้ำดี
          </Button>
        </Group>

        {/* Tab 1: โรคไตเรื้อรัง (CKD) */}
        {activeTab === 'ckd' && (
          <Stack gap="sm">
            <Box>
              <Group gap="xs" mb={4}>
                <Badge size="xs" color="blue" variant="light">
                  Chronic Kidney Disease
                </Badge>
                {selectedDiseaseId === 'ckd' && (
                  <Badge size="xs" color="emerald" variant="filled">
                    ภาวะสุขภาพปัจจุบันของคุณ
                  </Badge>
                )}
              </Group>
              <Text size="xs" c="dimmed">
                ไตทำหน้าที่กรองของเสียและรักษาสมดุลน้ำกับแร่ธาตุ ความต้องการสารอาหารจะต่างกันตามระยะ โดยเฉพาะกฎ 3 แร่ธาตุและโปรตีน:
              </Text>
            </Box>

            {/* Stages for CKD */}
            <Stack gap="xs">
              {/* Stage 1-2 */}
              <Paper
                p="sm"
                radius="md"
                style={{
                  backgroundColor: '#eff6ff',
                  border: selectedDiseaseId === 'ckd' && selectedStage === 'stage1_2' ? '2px solid #3b82f6' : '1px solid #dbeafe',
                }}
              >
                <Group justify="space-between" align="center" mb={2}>
                  <Group gap={6} align="center">
                    <Activity size={15} color="#1e40af" />
                    <Text size="xs" fw={700} c="#1e40af">
                      ระยะ 1 - 2 (eGFR ≥ 60): ชะลอความเสื่อม
                    </Text>
                  </Group>
                  {selectedDiseaseId === 'ckd' && selectedStage === 'stage1_2' && (
                    <Badge size="xs" color="blue" variant="filled">
                      ระยะที่คุณเลือกอยู่
                    </Badge>
                  )}
                </Group>
                <Text size="xs" c="#1e3a8a" lh={1.5}>
                  {kidneyStages.stage1_2.summary}
                </Text>
              </Paper>

              {/* Stage 3 */}
              <Paper
                p="sm"
                radius="md"
                style={{
                  backgroundColor: '#fffbeb',
                  border: selectedDiseaseId === 'ckd' && selectedStage === 'stage3' ? '2px solid #f59e0b' : '1px solid #fef3c7',
                }}
              >
                <Group justify="space-between" align="center" mb={2}>
                  <Group gap={6} align="center">
                    <AlertCircle size={15} color="#92400e" />
                    <Text size="xs" fw={700} c="#92400e">
                      ระยะ 3 (eGFR 30 - 59): เริ่มเฝ้าระวังแร่ธาตุ
                    </Text>
                  </Group>
                  {selectedDiseaseId === 'ckd' && selectedStage === 'stage3' && (
                    <Badge size="xs" color="amber" variant="filled">
                      ระยะที่คุณเลือกอยู่
                    </Badge>
                  )}
                </Group>
                <Text size="xs" c="#78350f" lh={1.5}>
                  {kidneyStages.stage3.summary}
                </Text>
              </Paper>

              {/* Stage 4-5 Pre */}
              <Paper
                p="sm"
                radius="md"
                style={{
                  backgroundColor: '#fef2f2',
                  border: selectedDiseaseId === 'ckd' && selectedStage === 'stage4_5_pre' ? '2px solid #ef4444' : '1px solid #fee2e2',
                }}
              >
                <Group justify="space-between" align="center" mb={2}>
                  <Group gap={6} align="center">
                    <AlertTriangle size={15} color="#991b1b" />
                    <Text size="xs" fw={700} c="#991b1b">
                      ระยะ 4 - 5 ก่อนฟอก (eGFR &lt; 30): เข้มงวดสูงสุด
                    </Text>
                  </Group>
                  {selectedDiseaseId === 'ckd' && selectedStage === 'stage4_5_pre' && (
                    <Badge size="xs" color="red" variant="filled">
                      ระยะที่คุณเลือกอยู่
                    </Badge>
                  )}
                </Group>
                <Text size="xs" c="#7f1d1d" lh={1.5}>
                  {kidneyStages.stage4_5_pre.summary}
                </Text>
              </Paper>

              {/* Dialysis */}
              <Paper
                p="sm"
                radius="md"
                style={{
                  backgroundColor: '#faf5ff',
                  border: selectedDiseaseId === 'ckd' && selectedStage === 'dialysis' ? '2px solid #a855f7' : '1px solid #f3e8ff',
                }}
              >
                <Group justify="space-between" align="center" mb={2}>
                  <Group gap={6} align="center">
                    <HeartPulse size={15} color="#6b21a8" />
                    <Text size="xs" fw={700} c="#6b21a8">
                      ระยะฟอกไต / ล้างไต (Dialysis): ต้องเพิ่มโปรตีน!
                    </Text>
                  </Group>
                  {selectedDiseaseId === 'ckd' && selectedStage === 'dialysis' && (
                    <Badge size="xs" color="grape" variant="filled">
                      ระยะที่คุณเลือกอยู่
                    </Badge>
                  )}
                </Group>
                <Text size="xs" c="#581c87" lh={1.5}>
                  {kidneyStages.dialysis.summary}
                </Text>
              </Paper>
            </Stack>

            {/* CKD Core Pillars */}
            <Box pt="xs">
              <Text size="xs" fw={700} c="slate.8" mb="xs">
                กฎ 3 แร่ธาตุสำคัญของโรคไต:
              </Text>
              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xs">
                <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
                  <Group gap={6} align="center">
                    <Banana size={16} color="#eab308" />
                    <Text size="xs" fw={700} c="slate.9">
                      โพแทสเซียม (K)
                    </Text>
                  </Group>
                  <Text size="11px" c="dimmed" mt={4} lh={1.4}>
                    พบในผลไม้รสหวาน ผักใบเขียวเข้ม หากไตขับไม่ทันทำให้กล้ามเนื้ออ่อนแรงและหัวใจเต้นผิดจังหวะเฉียบพลัน
                  </Text>
                </Paper>

                <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
                  <Group gap={6} align="center">
                    <Egg size={16} color="#f97316" />
                    <Text size="xs" fw={700} c="slate.9">
                      ฟอสฟอรัส (P)
                    </Text>
                  </Group>
                  <Text size="11px" c="dimmed" mt={4} lh={1.4}>
                    พบในไข่แดง นม ธัญพืช น้ำอัดลมสีดำ หากคั่งจะดึงแคลเซียมออกจากกระดูก ทำให้กระดูกเปราะ คันผิวหนัง และหลอดเลือดแข็ง
                  </Text>
                </Paper>

                <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
                  <Group gap={6} align="center">
                    <Sparkles size={16} color="#3b82f6" />
                    <Text size="xs" fw={700} c="slate.9">
                      โซเดียม (Na)
                    </Text>
                  </Group>
                  <Text size="11px" c="dimmed" mt={4} lh={1.4}>
                    พบในเกลือ น้ำปลา ซีอิ๊ว อาหารแปรรูป หากเกินจะดึงน้ำไว้ในหลอดเลือด ทำให้ความดันโลหิตสูง บวมน้ำ และน้ำท่วมปอด
                  </Text>
                </Paper>
              </SimpleGrid>
            </Box>
          </Stack>
        )}

        {/* Tab 2: โรคเกาต์ (Gout) */}
        {activeTab === 'gout' && (
          <Stack gap="sm">
            <Box>
              <Group gap="xs" mb={4}>
                <Badge size="xs" color="emerald" variant="light">
                  Gout / Hyperuricemia
                </Badge>
                {selectedDiseaseId === 'gout' && (
                  <Badge size="xs" color="emerald" variant="filled">
                    ภาวะสุขภาพปัจจุบันของคุณ
                  </Badge>
                )}
              </Group>
              <Text size="xs" c="dimmed">
                เกิดจากระดับกรดยูริกในกระแสเลือดสูงจนตกผลึกสะสมตามข้อต่อ ก่อให้เกิดอาการอักเสบ ปวด บวม แดงร้อนอย่างรุนแรง:
              </Text>
            </Box>

            {/* Stages for Gout */}
            <Stack gap="xs">
              {/* Gout Remission */}
              <Paper
                p="sm"
                radius="md"
                style={{
                  backgroundColor: '#ecfdf5',
                  border: selectedDiseaseId === 'gout' && selectedStage === 'gout_remission' ? '2px solid #10b981' : '1px solid #d1fae5',
                }}
              >
                <Group justify="space-between" align="center" mb={2}>
                  <Group gap={6} align="center">
                    <CheckCircle2 size={15} color="#065f46" />
                    <Text size="xs" fw={700} c="#065f46">
                      {goutStages.gout_remission.name}
                    </Text>
                  </Group>
                  {selectedDiseaseId === 'gout' && selectedStage === 'gout_remission' && (
                    <Badge size="xs" color="emerald" variant="filled">
                      ระยะที่คุณเลือกอยู่
                    </Badge>
                  )}
                </Group>
                <Text size="xs" c="#064e3b" lh={1.5}>
                  {goutStages.gout_remission.summary}
                </Text>
              </Paper>

              {/* Gout Flare */}
              <Paper
                p="sm"
                radius="md"
                style={{
                  backgroundColor: '#fef2f2',
                  border: selectedDiseaseId === 'gout' && selectedStage === 'gout_flare' ? '2px solid #ef4444' : '1px solid #fee2e2',
                }}
              >
                <Group justify="space-between" align="center" mb={2}>
                  <Group gap={6} align="center">
                    <Flame size={15} color="#991b1b" />
                    <Text size="xs" fw={700} c="#991b1b">
                      {goutStages.gout_flare.name}
                    </Text>
                  </Group>
                  {selectedDiseaseId === 'gout' && selectedStage === 'gout_flare' && (
                    <Badge size="xs" color="red" variant="filled">
                      ระยะที่คุณเลือกอยู่
                    </Badge>
                  )}
                </Group>
                <Text size="xs" c="#7f1d1d" lh={1.5}>
                  {goutStages.gout_flare.summary}
                </Text>
              </Paper>
            </Stack>

            {/* Gout Core Pillars */}
            <Box pt="xs">
              <Text size="xs" fw={700} c="slate.8" mb="xs">
                3 เสาหลักสำคัญในการควบคุมโรคเกาต์:
              </Text>
              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xs">
                <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
                  <Group gap={6} align="center">
                    <Flame size={16} color="#ef4444" />
                    <Text size="xs" fw={700} c="slate.9">
                      สารพิวรีน (Purine)
                    </Text>
                  </Group>
                  <Text size="11px" c="dimmed" mt={4} lh={1.4}>
                    พิวรีนจะถูกร่างกายย่อยสลายเป็น "กรดยูริก" แหล่งที่ต้องระวังคือ สัตว์ปีก เครื่องใน น้ำต้มซุปกระดูก กะปิ และยอดผักบางชนิด
                  </Text>
                </Paper>

                <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
                  <Group gap={6} align="center">
                    <WineOff size={16} color="#8b5cf6" />
                    <Text size="xs" fw={700} c="slate.9">
                      แอลกอฮอล์ & ฟรุกโตส
                    </Text>
                  </Group>
                  <Text size="11px" c="dimmed" mt={4} lh={1.4}>
                    เบียร์และเหล้าขัดขวางการขับยูริกของไต ส่วนน้ำเชื่อมฟรุกโตสในน้ำหวาน น้ำอัดลม และชานม เร่งตับสร้างยูริกเพิ่มขึ้นอย่างรวดเร็ว
                  </Text>
                </Paper>

                <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
                  <Group gap={6} align="center">
                    <Droplets size={16} color="#3b82f6" />
                    <Text size="xs" fw={700} c="slate.9">
                      ดื่มน้ำเปล่า 2.5 - 3 ลิตร
                    </Text>
                  </Group>
                  <Text size="11px" c="dimmed" mt={4} lh={1.4}>
                    การดื่มน้ำสะอาดให้เพียงพอตลอดวันเป็นวิธีธรรมชาติที่ดีที่สุดในการช่วยไตเจือจางและขับผลึกกรดยูริกออกทางปัสสาวะ พร้อมป้องกันนิ่วไต
                  </Text>
                </Paper>
              </SimpleGrid>
            </Box>
          </Stack>
        )}

        {/* Tab 3: ผู้ตัดถุงน้ำดี (Cholecystectomy) */}
        {activeTab === 'cholecystectomy' && (
          <Stack gap="sm">
            <Box>
              <Group gap="xs" mb={4}>
                <Badge size="xs" color="teal" variant="light">
                  Post-Cholecystectomy
                </Badge>
                {selectedDiseaseId === 'cholecystectomy' && (
                  <Badge size="xs" color="emerald" variant="filled">
                    ภาวะสุขภาพปัจจุบันของคุณ
                  </Badge>
                )}
              </Group>
              <Text size="xs" c="dimmed">
                เมื่อไม่มีถุงน้ำดีสำหรับกักเก็บและทำให้น้ำดีเข้มข้น น้ำดีจากตับจะไหลลงสู่ลำไส้เล็กตลอดเวลาแบบเจือจาง จึงต้องปรับพฤติกรรมการทานไขมัน:
              </Text>
            </Box>

            {/* Stages for Cholecystectomy */}
            <Stack gap="xs">
              {/* Early Recovery */}
              <Paper
                p="sm"
                radius="md"
                style={{
                  backgroundColor: '#fffbeb',
                  border: selectedDiseaseId === 'cholecystectomy' && selectedStage === 'chole_recovery' ? '2px solid #f59e0b' : '1px solid #fef3c7',
                }}
              >
                <Group justify="space-between" align="center" mb={2}>
                  <Group gap={6} align="center">
                    <AlertTriangle size={15} color="#92400e" />
                    <Text size="xs" fw={700} c="#92400e">
                      {cholecystectomyStages.chole_recovery.name}
                    </Text>
                  </Group>
                  {selectedDiseaseId === 'cholecystectomy' && selectedStage === 'chole_recovery' && (
                    <Badge size="xs" color="amber" variant="filled">
                      ระยะที่คุณเลือกอยู่
                    </Badge>
                  )}
                </Group>
                <Text size="xs" c="#78350f" lh={1.5}>
                  {cholecystectomyStages.chole_recovery.summary}
                </Text>
              </Paper>

              {/* Maintenance */}
              <Paper
                p="sm"
                radius="md"
                style={{
                  backgroundColor: '#ecfdf5',
                  border: selectedDiseaseId === 'cholecystectomy' && selectedStage === 'chole_maintenance' ? '2px solid #10b981' : '1px solid #d1fae5',
                }}
              >
                <Group justify="space-between" align="center" mb={2}>
                  <Group gap={6} align="center">
                    <CheckCircle2 size={15} color="#065f46" />
                    <Text size="xs" fw={700} c="#065f46">
                      {cholecystectomyStages.chole_maintenance.name}
                    </Text>
                  </Group>
                  {selectedDiseaseId === 'cholecystectomy' && selectedStage === 'chole_maintenance' && (
                    <Badge size="xs" color="emerald" variant="filled">
                      ระยะที่คุณเลือกอยู่
                    </Badge>
                  )}
                </Group>
                <Text size="xs" c="#064e3b" lh={1.5}>
                  {cholecystectomyStages.chole_maintenance.summary}
                </Text>
              </Paper>
            </Stack>

            {/* Chole Core Pillars */}
            <Box pt="xs">
              <Text size="xs" fw={700} c="slate.8" mb="xs">
                3 เสาหลักสำคัญสำหรับผู้ตัดถุงน้ำดี:
              </Text>
              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xs">
                <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
                  <Group gap={6} align="center">
                    <Layers size={16} color="#d97706" />
                    <Text size="xs" fw={700} c="slate.9">
                      สรีรวิทยาน้ำดีเจือจาง
                    </Text>
                  </Group>
                  <Text size="11px" c="dimmed" mt={4} lh={1.4}>
                    น้ำดีหยดลงลำไส้เรื่อยๆ หากกินไขมันปริมาณมากในมื้อเดียว น้ำดีจะย่อยไม่ทัน ทำให้เกิดอาการแน่นท้อง ท้องอืด หรือท้องเสียถ่ายมัน
                  </Text>
                </Paper>

                <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
                  <Group gap={6} align="center">
                    <Utensils size={16} color="#059669" />
                    <Text size="xs" fw={700} c="slate.9">
                      แบ่งมื้อย่อย กระจายไขมัน
                    </Text>
                  </Group>
                  <Text size="11px" c="dimmed" mt={4} lh={1.4}>
                    ซอยเป็น 4-5 มื้อเล็กๆ ช่วยให้น้ำดีย่อยไขมันได้หมดจด ไม่อดไขมัน 100% เพราะร่างกายยังต้องการไขมันดีและวิตามิน A, D, E, K
                  </Text>
                </Paper>

                <Paper p="xs" radius="md" withBorder style={{ backgroundColor: '#f8fafc' }}>
                  <Group gap={6} align="center">
                    <Clock size={16} color="#3b82f6" />
                    <Text size="xs" fw={700} c="slate.9">
                      ความทนทานเฉพาะบุคคล
                    </Text>
                  </Group>
                  <Text size="11px" c="dimmed" mt={4} lh={1.4}>
                    ความสามารถในการย่อยไขมันของแต่ละคนฟื้นตัวไม่เท่ากัน ควรค่อยๆ เพิ่มอาหารทีละชนิด เลี่ยงของทอดอมน้ำมัน และสังเกตการขับถ่าย
                  </Text>
                </Paper>
              </SimpleGrid>
            </Box>
          </Stack>
        )}

        <Divider my={4} color="#f1f5f9" />

        {/* Universal Traffic Light Explanation */}
        <Box>
          <Text size="xs" fw={700} c="slate.8" mb="xs">
            เกณฑ์ไฟจราจร 3 สีในการประเมินอาหาร:
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xs">
            <Paper p="xs" radius="md" style={{ backgroundColor: '#ecfdf5', border: '1px solid #d1fae5' }}>
              <Group gap={6} align="center">
                <ThemeIcon size={20} radius="xl" color="emerald">
                  <Check size={12} />
                </ThemeIcon>
                <Text size="xs" fw={700} c="#065f46">
                  สีเขียว: ทานได้ ค่อนข้างปลอดภัย
                </Text>
              </Group>
              <Text size="11px" c="#047857" mt={4} lh={1.4}>
                ปลอดภัยตามเกณฑ์ของภาวะสุขภาพและระยะนั้นๆ ทานได้เป็นประจำ (แต่ควรทานแต่พอดีเพื่อความสมดุล)
              </Text>
            </Paper>

            <Paper p="xs" radius="md" style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7' }}>
              <Group gap={6} align="center">
                <ThemeIcon size={20} radius="xl" color="yellow">
                  <AlertCircle size={12} />
                </ThemeIcon>
                <Text size="xs" fw={700} c="#92400e">
                  สีเหลือง: ทานได้แต่คุมปริมาณ
                </Text>
              </Group>
              <Text size="11px" c="#b45309" mt={4} lh={1.4}>
                มีสารอาหารที่ต้องระวังปานกลาง ทานได้แต่น้อย ไม่ถึงกับต้องงดเด็ดขาด ทานเป็นครั้งคราว
              </Text>
            </Paper>

            <Paper p="xs" radius="md" style={{ backgroundColor: '#fef2f2', border: '1px solid #fee2e2' }}>
              <Group gap={6} align="center">
                <ThemeIcon size={20} radius="xl" color="red">
                  <AlertTriangle size={12} />
                </ThemeIcon>
                <Text size="xs" fw={700} c="#991b1b">
                  สีแดง: ไม่แนะนำ ควรหลีกเลี่ยง
                </Text>
              </Group>
              <Text size="11px" c="#b91c1c" mt={4} lh={1.4}>
                มีความเสี่ยงสูงต่อภาวะสุขภาพและระยะนั้นๆ ส่งผลกระทบต่ออาการหรือค่าเลือดโดยตรง
              </Text>
            </Paper>
          </SimpleGrid>
        </Box>

        <Group justify="space-between" align="center" mt="xs">
          <Text size="11px" c="dimmed">
            * ข้อมูลนี้ใช้เป็นแนวทางเบื้องต้น ควรปฏิบัติตามคำแนะนำของแพทย์และนักกำหนดอาหารประจำตัวเป็นหลัก
          </Text>
          <Button variant="filled" color="emerald" size="xs" radius="xl" onClick={onClose}>
            เข้าใจแล้ว / ปิด
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

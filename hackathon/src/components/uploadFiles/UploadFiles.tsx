import { useState } from "react"
import styles from "./uploadFiles.module.css"
import { Grid,Text, Button, FileButton, Group,Container, SimpleGrid, Skeleton, rem, Divider } from "@mantine/core"
import { DropzoneButton } from "./dropzoneButton";
import { DropzoneButtonllm } from "./dropzoneButtonllm";
const PRIMARY_COL_HEIGHT = rem(500);

export function UploadFilesButton(){
    const [file, setFile] = useState<File | null>(null);

    const UploadFile = ()=> {
        console.log(file)
    }
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
    return(<>
    <Container my="md">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
                <Grid gutter="xl">
                    <Grid.Col>
                    <DropzoneButton/>
                    </Grid.Col>
                    <Divider my="sm" variant="dashed" />
                    <Grid.Col>
                    <DropzoneButtonllm/>
                    </Grid.Col>
                    
                </Grid>
            </SimpleGrid>
        </Container>
    
      </>
  
    );
}
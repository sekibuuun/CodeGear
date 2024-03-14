import React, { useState } from "react";

const Top: React.FC = () => {
  const [xId, setXId] = useState<string>("");
  const [instagramId, setInstagramId] = useState<string>("");
  const [githubId, setGithubId] = useState<string>("");
  const [zennId, setZennId] = useState<string>("");
  const [qiitaId, setQiitaId] = useState<string>("");
  const [atcoderId, setAtcoderId] = useState<string>("");

  const xIdHandler = (xId: string) => {
    setXId(xId);
    console.log(xId);
  };

  const instagramIdHandler = (instagramId: string) => {
    setInstagramId(instagramId);
  };

  const githubIdHandler = (githubId: string) => {
    setGithubId(githubId);
  };

  const zennIdHandler = (zennId: string) => {
    setZennId(zennId);
  };

  const qiitaIdHandler = (qiitaId: string) => {
    setQiitaId(qiitaId);
  };

  const atcoderIdHandler = (atcoderId: string) => {
    setAtcoderId(atcoderId);
  };

  return (
    <div>
      <div>
        <label htmlFor="xId">X</label>
        <input
          id="xId"
          type="text"
          value={xId}
          onChange={(e) => xIdHandler(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="instagramId">Instagram</label>
        <input
          id="instagramId"
          type="text"
          value={instagramId}
          onChange={(e) => instagramIdHandler(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="githubId">GitHub</label>
        <input
          id="githubId"
          type="text"
          value={githubId}
          onChange={(e) => githubIdHandler(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="zennId">Zenn</label>
        <input
          id="zennId"
          type="text"
          value={zennId}
          onChange={(e) => zennIdHandler(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="qiitaId">Qiita</label>
        <input
          id="qiitaId"
          type="text"
          value={qiitaId}
          onChange={(e) => qiitaIdHandler(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="atcoderId">AtCoder</label>
        <input
          id="atcoderId"
          type="text"
          value={atcoderId}
          onChange={(e) => atcoderIdHandler(e.target.value)}
        />
      </div>
    </div>
  );
};

export { Top };
